/**
 * Created by bjebb on 20.08.16.
 */

function handleToggleButton(toggleObj) {
    $.post('post/enter/', {
        checked: toggleObj.checked,
        time: toggleObj.dataset.time,
        position: toggleObj.dataset.position,
        csrfmiddlewaretoken: toggleObj.dataset.csrftoken
    })
        .done(function() {
            var username_field = $('#' + toggleObj.dataset.time + toggleObj.dataset.position);
            if (toggleObj.checked) username_field.fadeTo(0, 100);
            else username_field.fadeTo(100, 0);
        })
        .fail(function() {
            console.log("Enter failed!");
        });
}

function toggleAllInHisRow(button, disable){
    console.log("toggle!", disable);
    $(button).closest('tr').find('.button-checkbox-btn').each(function () {
        var $button = $(this);
        if($button.attr('id') == button.attr('id')) return;
        if (disable) $button.addClass('disabled');
        else $button.removeClass('disabled');
        $button.prop('disabled', disable);
    });
}


$(function () {
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // set inital disable state
        if($checkbox.is(':checked')) toggleAllInHisRow($button, true);

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            toggleAllInHisRow($button, $checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
});