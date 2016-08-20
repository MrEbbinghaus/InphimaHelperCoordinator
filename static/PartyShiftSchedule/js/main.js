/**
 * Created by bjebb on 20.08.16.
 */

function handleToggleButton(toggleObj) {
    $.post('post/enter/', {
        checked: toggleObj.checked,
        time: toggleObj.dataset.time,
        position: toggleObj.dataset.position,
        csrfmiddlewaretoken: toggleObj.dataset.csrftoken
    });
    console.log("Huray!");
}