# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-01 15:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PartyShiftSchedule', '0002_auto_20160801_1633'),
    ]

    operations = [
        migrations.AddField(
            model_name='position',
            name='pref_users',
            field=models.IntegerField(default=3),
        ),
    ]
