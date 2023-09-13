import React from 'react';


//Create and modify tv show profiles
export class tvShow{
    constructor(name, rating, image=null){
        this.name = name;
        this.rating = rating;
        this.image = image;
        this.comments = [];
    }
    addImage(image){
        this.image = image;
    }
    changeImage(newImage){
        this.image = newImage;
    }
    addComment(comment){
        this.comments.push(`\n ${comment}`);
    }
    removeComment(commentToRemove){
        if (commentToRemove === this.comments[0]){
        this.comments = this.comments.filter((comment) => comment !== commentToRemove);
    } else {
        this.comments = this.comments.filter((comment) => comment !== `\n ${commentToRemove}`);
    }
    }
    changeRating(newRating){
        this.rating = newRating;
    }
    display(){
        return (
            <div>
                <h3>{this.name}</h3>
                <img src={this.image}/>
                <h4>My rating for {this.name} is {this.rating}</h4>
                <h5>{this.comments}</h5>
            </div>
        );
    }
}

//Search Party
const searchPartyProfile = new tvShow("Search Party", 8.5, "images/searchPartyImg.jpg");
searchPartyProfile.addComment("one of my all time faves!");
searchPartyProfile.removeComment("one of my all time faves!");
searchPartyProfile.changeRating(10);

//Bojack Horseman

const bojackHorsemanProfile = new tvShow("Bojack Horseman", 9);

bojackHorsemanProfile.addImage("images/bojackHorsemanImg.png");

bojackHorsemanProfile.addComment("yes it is depressing but it is also very silly.");

//Desperate Housewives

const desperateHousewivesProfile = new tvShow("Desperate Housewives", 9.7, "images/desperateHousewivesImg.jpg");

//King of the Hill

const kingOfTheHillProfile = new tvShow("King of the Hill", 8.2, "images/kingOfTheHillImg.jpg");


bojackHorsemanProfile.addComment("funny sad horse!");

bojackHorsemanProfile.removeComment("funny sad horse!");



export { searchPartyProfile, bojackHorsemanProfile,  desperateHousewivesProfile, kingOfTheHillProfile };
