import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    yield script.text('So tired.');
    yield script.text('But, it is only Tuesday evening.');
    yield script.text('You close the door behind you and head to the kitchen.')
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
      case 'pencil': yield script.text('Expecting to feel the gentle grind of the pencil tip as it scrapes the page you pause with disappointment. Tugging at the loose and blunted lead, it slides out easily. You fish around in your bag again, this time hunting out a sharpener.'); break;
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
      case 'family member': yield script.text('You think back to a simple task that took forever last week.'); ('You feel the familiar vacancy of the help you used to lend one another.'); break;
      case 'penpal': yield script.text('Still images from news clippings and political posters float up in your mind.'); ('You don\'t really know this person.'); ('The memories aren\'t personal.'); ('But, the injustice is.'); break;
      case 'lover': yield script.text('The urgency and the desire you feel for this person are still fresh and freshly painful.'); ('You were finally just getting to know each other after years of secret crushes.'); break;
    }

    yield script.text(`Before long, a mix of feelings rushes into the gap between you and your ${person.key}.`);
    yield script.text ('You imagine an alternate timeline that could hold both of you at once.');
    yield script.text('In the same room.');
    yield script.text('Without any moments missing.');
    yield script.text(`Another feeling rushes toward you as you start to fiddle with your ${implement.key}.`)

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
      case 'fear': yield script.text(`A subtle but consistent concern for your ${person.key}\'s safety and well being shapes your waking hours and makes your sleep a restless one. Is your ${person.key} warm enough? Is ${person.key} eating? You try not to let in the scarier questions that hover about the back of your mind.`); break;
      case 'apology': yield script.text(`You regret that you had to use your ${person.key}\'s dead name to make sure the letter would get delivered.`); break;
      case 'tenderness': yield script.text('You feel gentle and tender inside. You radiate warmth into the page and try to think of how to translate the feeling into words.'); break;
      case 'rage': yield script.text('Sometimes your thoughts are cold condemnations of these circumstances. At others it\’s hot bright flashes of FUCKING FUCK THIS that burn under your skin.'); break;
      case 'sadness': yield script.text(`Immobilized by the sadness of the present and the past, you think of all the letters you failed to write. You grip the ${implement.key} a little tighter when what you really wish to do is put it down, again.`); break;
      case 'devotion': yield script.text(`Deep in your heart, you rub your sense of commitment and devotion to your ${person.key} like a marian statue’s foot--gingerly. Like the way the oils of your hand leave a mark over time. The color in your memory is starting to rub away but, the feeling is intact. You remain guided by that felt knowledge.`); break;
      case 'bereavement': yield script.text('Feelings of loss and loneliness seep into the edges of you with the same slow but deliberate pace you watched the joy and determination slip out of your reflection in the bus window on the way to work each day. Sometimes when you imagine the prison the image of a tomb flies up before your eyes. A place that siphons off life from those inside and out.'); break;
      case 'inspiration': yield script.text(`Feelings of that old raw inspiration from the fiernecess of your ${person.key} flood your limbs and your eyes sting with a tear or two. There is so much work to be done.`); break;
      case 'pessimism': yield script.text('Feelings of being beaten down by the constant disappointments of the cycles of sentencing, the spike and dash of hope at parole denials, slowly rotate inside you. The movement is barely perceptible anymore as you try not to let your investments show--even to yourself.'); break;
      case 'strength': yield script.text(`You want to put on a strong front. You write with conviction about the quickness of time and the skill of your ${person.key}\'s lawyer and all the things you are putting off doing until this is all over.`); break;
    }

    yield script.text(`You take a deep breath and return to the page. You pick up your ${implement.key} again and begin to write about...`)

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
      case 'life': yield script.text(`You write about how work is going. How you are trying to learn how to dance from YouTube videos. How you still hate doing laundry. How you got an allergy test and are trying to give up dairy but you\’ll still get the biggest pizza you can find on the day that your ${person.key} gets out. With truffffflessssss.`); break;
      case 'plan': yield script.text('You resume writing about a plan the two of you have talked about before.');
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
      case 'interest': yield script.text(`You write about something your ${person.key} cares about.`); break;
    }

    yield script.text('You scratch out the letters "How are you?" and you...');

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
      case 'feel': yield script.text('feel badly for asking but, don\'t say so.'); break;
      case 'pause': yield script.text(`pause to pray for your ${person.key}\'s wellbeing, reaching out with your spirit`); break;
      case 'remember': yield script.text(`remember the last thing that your ${person.key} wrote to you.`); break;
      case 'consider': yield script.text('briefly consider that you will not hear back because...');
          const briefly = yield script.menu([{
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
          switch (briefly.key) {
            case 'transfer': yield script.text('because people are transferred all the time without warning.'); break;
            case 'trash': yield script.text(`the guards will make sure your ${person.key}\'s letters will get lost.`); break;
            case 'phone': yield script.text(`you\'re expecting ${person.key}\'s release soon but you\'re not expecting that a phone call will be granted to arrange safe transportation.`); break;
            case 'attention': yield script.text('because this deportation hasn\'t garnered enough media attention.'); ('Yet.'); break;
          }
      break;
    }

    yield script.text('You continue writing.');

    const keepwriting = yield script.menu([{
      key: 'learn',
      text: 'You share something that happened recently.'
    }, {
      key: 'dream',
      text: 'You share a dream you had last week.'
    }, {
      key: 'scribble',
      text: 'You scribble out most of what you\'ve written and start over.'
    }])
   switch (keepwriting.key) {
    case 'learn': yield script.text('filler text'); break;
    case 'dream': yield script.text('filler text'); break;
    case 'scribble': yield script.text('filler text'); break;
}
  })
});
