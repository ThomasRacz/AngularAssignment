import {Content} from './content-interface';

const content1: Content = {
  author: 'Thomas Racz',
  body: 'The consequences of getting into an MMO during a semester will be grave.',
  id: 0,
  title: 'Mistakes happen, maybe?',
  tags: ['Personal', 'School', 'Gaming'],
  type: 'Quotes',
  imgUrl: 'https://cdn.discordapp.com/attachments/359358776635293700/765747505773936640/unknown.png'
};
const content2: Content = {
  author: 'Thomas Racz',
  body: 'Mr. Skeletal Today at 11:50 AM</br>' +
    'wow</br>' +
    '</br>' +
    '1970 Datsun 240z Today at 12:12 PM</br>' +
    'I mean have you seen your hat?</br>' +
    '</br>' +
    'Mr. Skeletal Today at 12:28 PM</br>' +
    'bro</br>' +
    'the stats on that thing</br>' +
    'its incredible',
  id: 1,
  title: 'Luxury Wares Only?',
  tags: ['Gaming', 'Funny'],
  type: 'Quotes',
  imgUrl: 'https://cdn.discordapp.com/attachments/91401441788329984/765602368749305947/unknown.png'
};
const content3: Content = {
  author: 'Thomas Racz',
  body: 'Keyboards as a hobby is too expensive, so I still went into it knowing in full that it would make me broke and built another one...',
  id: 2,
  title: 'Never Too Many Keyboards',
  type: 'Thoughts',
  imgUrl: 'https://pbs.twimg.com/media/Eh7PkGQX0AIutNc?format=jpg&name=4096x4096'
};
const content4: Content = {
  author: 'Thomas Racz',
  body: 'More content?',
  id: 3,
  title: 'Some more test content',
  tags: ['Tag1', 'Tag 2'],
  type: 'Thoughts',
};
const content5: Content = {
  author: 'Rasanjeet Singh',
  body: '...Something with cinnamon, I kinda wanna make a reference to Cinnamon Toast Crunch. Idk man what about Cinnamon Experience??',
  id: 4,
  tags: ['Memes'],
  title: '2am character names...',
  type: 'Quotes',
  imgUrl: 'https://pbs.twimg.com/media/EkB6Xf8X0AInD7I?format=jpg&name=large'
};
export const someContentDB: Content[] = [content1, content2, content3, content4, content5];
