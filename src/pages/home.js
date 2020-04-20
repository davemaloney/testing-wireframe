import React from "react";
import Hero from "../components/hero.js";
import AdUnit from "../components/adunit.js";
import Body from "../components/body.js";
import Footer from "../components/footer.js";

function Home() {
  window.digitalData.page.pageInfo.pageName = "nba:home";
  return (
    <div>
      <Hero
        title="Home"
        text="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
        buttonText="Learn More"
        link="/video"
      ></Hero>
      <AdUnit></AdUnit>
      <Footer buttonText="Cookie Settings"></Footer>
      <Body title="Home" linkDestination="/news" linkText="News">
        <p>
          Inspect anything brought into the house scamper rub butt on table give
          me some of your food give me some of your food give me some of your
          food meh, i don't want it, or spot something, big eyes, big eyes,
          crouch, shake butt, prepare to pounce. Sit by the fire good now the
          other hand, too refuse to drink water except out of someone's glass.
          With tail in the air cat gets stuck in tree firefighters try to get
          cat down firefighters get stuck in tree cat eats firefighters'
          slippers fall asleep on the washing machine catch eat throw up catch
          eat throw up bad birds. Gimme attention gimme attention gimme
          attention gimme attention gimme attention gimme attention just kidding
          i don't want it anymore meow bye sun bathe run at 3am. Pet my belly,
          you know you want to; seize the hand and shred it! murr i hate humans
          they are so annoying knock over christmas tree but howl on top of tall
          thing for bury the poop bury it deep or cats go for world domination,
          i shredded your linens for you. This cat happen now, it was too
          purr-fect!!!. Cat milk copy park pee walk owner escape bored tired
          cage droppings sick vet vomit hiding behind the couch until lured out
          by a feathery toy man running from cops stops to pet cats, goes to
          jail. Catto munch salmono spill litter box, scratch at owner, destroy
          all furniture, especially couch and kitty loves pigs yet give me some
          of your food give me some of your food give me some of your food meh,
          i don't want it. Groom forever, stretch tongue and leave it slightly
          out, blep. Morning beauty routine of licking self nap all day bite off
          human's toes stretch purr as loud as possible, be the most annoying
          cat that you can, and, knock everything off the table. Scratch leg;
          meow for can opener to feed me leave hair on owner's clothes. Hiss at
          vacuum cleaner lounge in doorway make it to the carpet before i vomit
          mmmmmm. I vomit in the bed in the middle of the night litter box is
          life, slap the dog because cats rule murr i hate humans they are so
          annoying. Lick the other cats meow meow mama so snuggles up to
          shoulders or knees and purrs you to sleep but scratch at fleas, meow
          until belly rubs, hide behind curtain when vacuum cleaner is on
          scratch strangers and poo on owners food yet dismember a mouse and
          then regurgitate parts of it on the family room floor kitty loves
          pigs. Grass smells good eat half my food and ask for more meow and
          walk away but sugar, my siamese, stalks me (in a good way), day and
          night , and fight own tail. Ears back wide eyed destroy house in 5
          seconds. Push your water glass on the floor gimme attention gimme
          attention gimme attention gimme attention gimme attention gimme
          attention just kidding i don't want it anymore meow bye. Cats are cute
          purr purr purr until owner pets why owner not pet me hiss scratch meow
          yet slap the dog because cats rule lie on your belly and purr when you
          are asleep skid on floor, crash into wall , destroy house in 5 seconds
          so cat dog hate mouse eat string barf pillow no baths hate everything.
        </p>
      </Body>
    </div>
  );
}

export default Home;
