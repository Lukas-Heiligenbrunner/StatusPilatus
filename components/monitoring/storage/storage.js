/*
*    StatusPilatus: Monitor your PC like never before!
*    Copyright (C) 2017 PilatusDevs
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU General Public License as published by
*    the Free Software Foundation, either version 3 of the License, or
*    (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU General Public License for more details.
*
*    You should have received a copy of the GNU General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
"use strict";

function initStorage() {
    initStorageUsage();
}

function refreshStorage() {
    console.log("HDD refresh call");
}

function initStorageUsage() {
    si.fsSize()
    .then(data => {
        console.log(data);
        for (var c = 0; c < data.length; c++) {
            var html = "<h3>Disk "+data[c].mount+"</h3>";
            var status;
            if (data[c].use < 60) {
                status = "progress-bar-success";
            } else if (data[c].use > 60 && data[c].use < 90) {
                status = "progress-bar-warning";
            } else {
                status = "progress-bar-danger";
            }
            html += "<div class='progress'> <div class='progress-bar "+status+"' role='progressbar' aria-valuenow='"+data[c].use+"' aria-valuemin='0' aria-valuemax='100' style='width: "+data[c].use+"%'>"+parseInt(data[c].use)+"%</div></div>"
            $(".frame").append(html);
        }
    });
}
