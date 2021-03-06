/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'XWCVEVrIdBMm5kFWdLll612i0yn1',
        username: 'saj',
        fullName: 'Saj K',
        emailAddress: 'skadalikat@gmail.com',
        following: ['2'],
        followers: ['2', 'ibzamlVlS2T8rO6koL5eKm1QDd62', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'raphael',
        fullName: 'Raffaello Sanzio da Urbino',
        emailAddress: 'raphael@sanzio.com',
        following: [],
        followers: ['XWCVEVrIdBMm5kFWdLll612i0yn1'],
        dateCreated: Date.now()
      },
      {
        userId: 'ibzamlVlS2T8rO6koL5eKm1QDd62',
        username: 'sjk',
        fullName: 'Sajna Rajesh',
        emailAddress: 'sajna.rajesh@gmai.com',
        following: [],
        followers: ['XWCVEVrIdBMm5kFWdLll612i0yn1'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'orwell',
        fullName: 'George Orwell',
        emailAddress: 'george@orwell.com',
        following: [],
        followers: ['XWCVEVrIdBMm5kFWdLll612i0yn1'],
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }
  