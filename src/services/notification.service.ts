import { Injectable } from '@angular/core';
import * as $ from 'jquery';

declare var jquery:any;

@Injectable()
export class Notification {
    constructor(){}

    /**
     * @function success - Success notification
     */

    public success(message){
        $("app-root").append("<div class='errorBox success inrowf'><div class='w100 sflex jcc aic'>" +
             message +
            "<img class='closeme' src=\"../assets/icons/Close.svg\" alt=''></div></div>");
        setTimeout(()=>{
            $(".errorBox").addClass("show");
        },500);
        setTimeout(() => {
            $(".errorBox").removeClass("show");
        },6000);
        setTimeout(() => {
            $(".errorBox").remove();
        },6500)
        $("img.closeme").on("click",() =>{
            this.closeme();
        })
    }
    /**
     *
     * @param message - the message inside the notification
     *
     * @function error - Error notification
     */

    public error(message){
        $("app-root").append("<div class='errorBox error inrowf'><div class='w100 sflex jcc aic'>" +
            "<span class='hfs15 sflex w100 aic smjcsb jcc'>"+ message +"</span>" +
            "<img class='closeme' src=\"../assets/icons/Close.svg\" alt=''></div></div>");
        setTimeout(()=>{
            $(".errorBox").addClass("show");
        },500);
        setTimeout(() => {
            $(".errorBox").removeClass("show");
        },6000);
        setTimeout(() => {
            $(".errorBox").remove();
        },6500)
        $("img.closeme").on("click",() =>{
            this.closeme();
        })
    }

    /**
     * @function closeme - close the error box popup
     */
    private closeme(){
        $(".errorBox").removeClass("show");
        setTimeout(() => {
            $(".errorBox").remove();
        },500)
    }
}