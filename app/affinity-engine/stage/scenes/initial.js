import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    yield script.text('So tired.');
    yield script.text('But, you realize, it is only Tuesday evening.');
    yield script.text('You close the door behind you and head to the kitchen.');
    yield script.text('You clear a little space and sit down.');
    yield script.text('Reaching into the bag at your feet for something to write with, you pull out...');

    const implement = yield script.menu([{
      key: 'pen',
      text: 'a pen'
    }, {
      key: 'pencil',
      text: 'a pencil'
    }]);

    switch (implement.key) {
      case 'pen': yield script.text('The wet ink fades to matte as your hand sweeps today\'s date across the top right of the page.'); break;
      case 'pencil': yield script.text('Expecting to feel the gentle grind of the pencil tip as it scrapes the page you pause with disappointment.');
      yield script.text('Tugging at the loose and blunted lead, it slides out easily.');
      yield script.text ('You fish around in your bag again, this time hunting out a sharpener.'); break;
    }

    yield script.text('You think about the person you\'re writing to...');

    const person = yield script.menu([{
      key: 'friend',
      text: 'a friend'
    }, {
      key: 'family member',
      text: 'a family member'
    }, {
      key: 'penpal',
      text: 'someone you have never met'
    }, {
      key: 'lover',
      text: 'a lover'
    }]);

    switch (person.key) {
      case 'friend': yield script.text('You linger over how you used to laugh together about the weirdest stuff.'); break;
      case 'family member': yield script.text('You think back to a simple task that took forever last week.');
      yield script.text(`You feel the familiar vacancy of the help you and your ${person.key} used to lend one another.`);
      yield script.text(`Sure, things haven't always been easy between the two of you.`);
      yield script.text(`But, right now, you feel focused on getting through this sentence.`);
      yield script.text('Together.'); break;
      case 'penpal': yield script.text('Still images from news clippings and political posters float up in your mind.');
      yield script.text('You don\'t really know this person.');
      yield script.text('The memories aren\'t personal.');
      yield script.text('But, the injustice is.'); break;
      case 'lover': yield script.text('The urgency and the desire you feel for this person are still fresh and freshly painful.');
      yield script.text('You were finally just getting to know each other after years of secret crushes.'); break;
    }

    yield script.text(`Before long, a mix of feelings rushes into the gap between you and your ${person.key}.`);
    yield script.text ('You imagine an alternate timeline that could hold both of you at once.');
    yield script.text('In the same room.');
    yield script.text('Without any moments missing.');
    yield script.text(`You start to fiddle with your ${implement.key}.`);
    yield script.text(`Somedays conflicting feelings overwhelm you but, today, one emotion dominates all others.`);

    const feeling = yield script.menu([{
      key: 'fear',
      text: 'fear'
    }, {
      key: 'apology',
      text: 'apology'
    }, {
      key: 'tenderness',
      text: 'tenderness'
    }, {
      key: 'rage',
      text: 'rage'
    }, {
      key: 'sadness',
      text: 'sadness'
    }, {
      key: 'devotion',
      text: 'devotion'
    }, {
      key: 'bereavement',
      text: 'bereavement'
    }, {
      key: 'inspiration',
      text: 'inspiration'
    }, {
      key: 'pessimism',
      text: 'pessimism'
    }, {
      key: 'strength',
      text: 'strength'
    }])

    switch (feeling.key) {
      case 'fear': yield script.text(`A subtle but consistent concern for your ${person.key}\'s safety and well being shapes your waking hours and makes your sleep a restless one.`);
      yield script.text(`Is your ${person.key} warm enough?`);
      yield script.text(`Is ${person.key} eating?`);
      yield script.text(`You try not to let in the scarier questions that hover about the back of your mind.`); break;
      case 'apology': yield script.text(`You regret that you had to use your ${person.key}\'s dead name to make sure the letter would get delivered.`); break;
      case 'tenderness': yield script.text('You feel gentle and tender inside.');
      yield script.text('You radiate warmth into the page and try to think of how to translate the feeling into words.'); break;
      case 'rage': yield script.text('Sometimes your thoughts are cold condemnations of these circumstances.');
      yield script.text('At others it\’s hot bright flashes of FUCKING FUCK THIS that burn under your skin.'); break;
      case 'sadness': yield script.text(`Immobilized by the sadness of the present and the past, you think of all the letters you failed to write.`);
      yield script.text(`You grip the ${implement.key} a little tighter when what you really wish to do is put it down, again.`); break;
      case 'devotion': yield script.text(`Deep in your heart, you rub your sense of commitment and devotion to your ${person.key} like a marian statue’s foot--gingerly.`);
      yield script.text('Like the way the oils of your hand leave a mark over time.');
      yield script.text('The color in your memory is starting to rub away but, the feeling is intact.');
      yield script.text('You remain guided by that felt knowledge.'); break;
      case 'bereavement': yield script.text('Feelings of loss and loneliness seep into the edges of you with the same slow but deliberate pace you watched the joy and determination slip out of your reflection in the bus window on the way to work each day.');
      yield script.text('Sometimes when you imagine the prison the image of a tomb flies up before your eyes.');
      yield script.text('A place that siphons off life from those inside and out.'); break;
      case 'inspiration': yield script.text(`Feelings of that old raw inspiration from the fiernecess of your ${person.key} flood your limbs and your eyes sting with a tear or two.`);
      yield script.text ('There is so much work to be done.'); break;
      case 'pessimism': yield script.text('Feelings of being beaten down by the constant disappointments of the cycles of sentencing, the spike and dash of hope at parole denials, slowly rotate inside you.');
      yield script.text('The movement is barely perceptible anymore as you try not to let your investments show--even to yourself.'); break;
      case 'strength': yield script.text(`You want to put on a strong front.`);
      yield script.text(`You write with conviction about the quickness of time and the skill of your ${person.key}\'s lawyer and all the things you are putting off doing until this is all over.`); break;
    }

    yield script.text(`You take a deep breath and return to the page.`);
    yield script.text(`You pick up your ${implement.key} again and begin to write about...`);

    const lifeplaninterest = yield script.menu([{
      key: 'life',
      text: 'your life'
    }, {
      key: 'plan',
      text: 'a plan'
    }, {
      key: 'interest',
      text: 'an interest'
    }])

    switch (lifeplaninterest.key) {
      case 'life': yield script.text(`You write about how work is going.`);
      yield script.text(`How you are trying to learn how to dance from TikTok.`);
      yield script.text(`You write "LOL" as you think about how badly it's going.`);
      yield script.text(`You also write about trying to give up dairy but promise you\’ll still get the biggest pizza you can find on the day that your ${person.key} gets out.`);
      yield script.text(`With truffffflessssss.`); break;
      case 'plan': yield script.text('You resume writing about a plan the two of you have written about before.');
          const plans = yield script.menu([{
            key: 'creative',
            text: 'a creative plan'
          }, {
            key: 'trip',
            text: 'a trip'
          }])
          switch (plans.key) {
            case 'creative': yield script.text('You write about your ongoing plan to make t-shirts together. You just came up with a great design this week.'); break;
            case 'trip': yield script.text('You write about taking a roadtrip together exploring your home state in way neither of you have done before.'); break;
          }
      break;
      case 'interest': yield script.text(`You write about something your ${person.key} cares about.`);
      yield script.text(`You never thought much about this thing before your ${person.key} introduced you to it.`); break;
    }

    yield script.text('You start to write and then scratch out the words "How are you?" and you...');

    const howareyou = yield script.menu([{
      key: 'feel',
      text: 'feel'
    }, {
      key: 'pause',
      text: 'pause'
    }, {
      key: 'remember',
      text: 'remember'
    }, {
      key: 'consider',
      text: 'consider'
    }])

    switch (howareyou.key) {
      case 'feel': yield script.text('You feel badly for asking but, don\'t say so.'); break;
      case 'pause': yield script.text(`You pause to pray for your ${person.key}\'s wellbeing, reaching out with your spirit.`); break;
      case 'remember': yield script.text(`You remember the last thing that your ${person.key} wrote to you.`); break;
      case 'consider': yield script.text('Your anxiety flares up.');
      yield script.text('You worry that you will not hear back because...');
          const consider = yield script.menu([{
            key: 'transfer',
            text: 'transfer'
          }, {
            key: 'trash',
            text: 'trash'
          }, {
            key: 'phone',
            text: 'phone call'
          }, {
            key: 'attention',
            text: 'attention'
          }])
          switch (consider.key) {
            case 'transfer': yield script.text('...because people are transferred all the time without warning.'); break;
            case 'trash': yield script.text(`...the guards will make sure your ${person.key}\'s letters will get lost.`); break;
            case 'phone': yield script.text(`...you're expecting ${person.key}\'s release soon but you\'re not expecting that a phone call will be granted to arrange safe transportation.`); break;
            case 'attention': yield script.text('...because this deportation hasn\'t garnered enough media attention.'); ('Yet.'); break;
          }
      break;
    }

    yield script.text('You continue writing about...');

    const keepwriting = yield script.menu([{
      key: 'learn',
      text: 'something that happened recently'
    }, {
      key: 'dream',
      text: 'a dream you had last week'
    }, {
      key: 'scribble',
      text: 'scribble out most of what you\'ve written so far'
    }])
   switch (keepwriting.key) {
    case 'learn': yield script.text(`You write about standing up for yourself for the first time at work.`);
    yield script.text(`You think your ${person.key} would be proud.`); break;
    case 'dream': yield script.text('You describe a vivid dream from last week about human animal hybrids arguing about footie pajamas.');
    yield script.text('You doubt it means anything but laugh and ask, But what if it did?'); break;
    case 'scribble': yield script.text(`You scribble until the words beneath are illegible.`);
    yield script.text(`You put down your ${implement.key} on the table.`);
    yield script.text(`It makes a muted *clack* sound as it comes to rest.`);
    yield script.text(`You lean back in your chair and hear the old wood whine in protest.`);
    yield script.text(`You lean forward, scooping up the ${implement.key}, and begin again mid-thought.`); break;
      }



  yield script.text(`You respond to a need named in your ${person.key}\'s last letter.`);

  const need = yield script.menu([{
    key: 'commissary',
    text: 'commissary'
  }, {
    key: 'book',
    text: 'something to read'
  }, {
    key: 'art',
    text: 'something to look at'
  }, {
    key: 'penpal',
    text: 'more people to write to'
  }, {
    key: 'fundraising',
    text: 'funds for defense'
  }, {
    key: 'medication',
    text: 'access to meds'
  }])
  switch (need.key) {
    case 'commissary': yield script.text(`You have a little saved up a little you\’re going to deposit into your ${person.key}\’s commissary account tomorrow.`); break;
    case 'book': yield script.text(`You found the publisher of the book your ${person.key} mentioned.`);
    yield script.text(`They said they'll be able to ship directly to the prison but it might take awhile.`); break;
    case 'art': yield script.text(`You loved hearing your ${person.key}\'s description of what others have hung up on their walls.`);
    yield script.text(`You\'ve been following an artist online who you think is also your ${person.key}\'s style.`);
    yield script.text(`You ask, "Could I send you a small piece of art for your wall, too?"`); break;
    case 'penpal': yield script.text(`Your roommate agreed to write to your ${person.key}, too.`);
    yield script.text(`You think something will arrive soon!`); break;
    case 'fundraising': yield script.text(`You\'ve been sharing the gofund.me for your ${person.key}\'s defense everyday.`);
    yield script.text(`Everyday a few more donations trickle in. That\'s something.`); break;
    case 'medication': yield script.text(`The clinic at the law school is helping you get your ${person.key}\'s medication inside.`); break;
  }

yield script.text('You close with a wish.');

const wish = yield script.menu([{
  key: 'okayness',
  text: 'okayness'
}, {
  key: 'knowledge',
  text: 'knowledge'
}, {
  key: 'abolition',
  text: 'abolition'
}, {
  key: 'peace',
  text: 'peace'
}, {
  key: 'reunification',
  text: 'reunification'
}])
switch (wish.key) {
  case 'okayness': yield script.text('For everything to be okay.'); break;
  case 'knowledge': yield script.text(`For more people to know what ${person.key} were going through.`); break;
  case 'abolition': yield script.text('For the abolition of all prisons.');
  yield script.text('For the abolition of all policing.');
  yield script.text('For an entirely new world shaped by collective care and black power.'); break;
  case 'peace': yield script.text('For some inner stability and peace.'); break;
  case 'unity': yield script.text(`For your ${person.key}\'s friend to get out of the SHU soon.`); break;
}

yield script.text('And a promise:');

const promise = yield script.menu([{
  key: 'write',
  text: 'to write'
}, {
  key: 'read',
  text: 'to read'
}, {
  key: 'visit',
  text: 'to visit'
}, {
  key: 'share',
  text: 'to share'
}])
switch (promise.key) {
  case 'write': yield script.text(`You promise you\'ll write again soon.`); break;
  case 'read': yield script.text(`You promise you\'ll read that book your ${person.key} recommended before too long.`); break;
  case 'visit': yield script.text(`You promise you\'ll start the process of getting on the visitor list soon.`); break;
  case 'share': yield script.text(`You promise you\'ll tell your ${person.key}\'s story to someone new.`); break;
}

yield script.text('You sign off the letter...');

const signoff = yield script.menu([{
  key: 'soon',
  text: 'Til soon,'
}, {
  key: 'love',
  text: 'Love,'
}, {
  key: 'miss',
  text: 'Miss you,'
}, {
  key: 'goblins',
  text: 'Hugs and goblins,'
}, {
  key: 'saga',
  text: 'The saga continues,'
}, {
  key: 'sincerely',
  text: 'Sincerely,'
}, {
  key: 'ofyou',
  text: 'Thinking of you,'
}])

switch (signoff.key) {

  case 'soon': yield script.text('PROMPT TO TYPE YOUR NAME AND LOCATION'); break;
  case 'love': yield script.text('PROMPT TO TYPE YOUR NAME AND LOCATION'); break;
  case 'miss': yield script.text('PROMPT TO TYPE YOUR NAME AND LOCATION'); break;
  case 'goblins': yield script.text('PROMPT TO TYPE YOUR NAME AND LOCATION'); break;
  case 'saga': yield script.text('PROMPT TO TYPE YOUR NAME AND LOCATION'); break;
  case 'sincerely': yield script.text('PROMPT TO TYPE YOUR NAME AND LOCATION'); break;
  case 'ofyou': yield script.text('PROMPT TO TYPE YOUR NAME AND LOCATION'); break;

}
yield script.text('You fold up the sheet of paper and run your fingers along these new creases, pressing deeply into the wood of the table.');
yield script.text('Shimmying the letter into an envelop and then flipping it over onto the table, you carefully spell out the address you’ve already memorized.');
yield script.text('The blank spot in the top right corner comes into focus.');
yield script.text('You put the envelop down gently and go in search of stamp.');
})
});
