/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '20px',
        md: '32px',
      },
      screens: {
      '2xl': {'max': '1440px'},

      'xl': {'max': '1024px'},

      'lg': {'max': '768px'},

      'md': {'max': '500px'},

      'sm': {'max': '375px'},  
      
      'xsm': {'max': '320px'}, 
      },

      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
      },

      backgroundImage: {
        'hero': "url('https://media.istockphoto.com/id/1570804712/photo/chicken-fried-rice-and-spoon-on-wooden-background-top-view.jpg?s=612x612&w=0&k=20&c=70DQNJu63imB4YtQcpNhwatHxUKKNq909T3D3ipi-14=')",

        'hero2': "url('https://media.istockphoto.com/id/1499133195/photo/a-delicious-bowl-of-soto-indonesian-food.jpg?s=612x612&w=0&k=20&c=0zOkaOLFjRSsq5HfktB1d-c6KOaefNvCd6Ptu8FiwOE=')",

        'hero3': "url('https://media.istockphoto.com/id/1373169941/photo/afang-soup.jpg?s=612x612&w=0&k=20&c=OxEiHp0fd-LOa1FBatSvepOr7skLrxCN-pMspou6d7c=')",

        'signinbg': "url('https://media.istockphoto.com/id/1128915783/photo/delicious-appetizing-classic-spaghetti-pasta-with-tomato-sauce-parmesan-cheese-and-fresh.jpg?s=612x612&w=0&k=20&c=UqLauvhesSHXpjA4FgOsPbjmuAytffqnhwEl0Mt5eHU=')",

        'venture': "url('https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=6DjpoYqgYVDLmtj3-q7H7wvoiwkVgzi1rn7a_XUZ_Ng=')",

        'footer': "url('https://media.istockphoto.com/id/1312307361/photo/rosemary-pepper-and-salt-cooking-border.jpg?s=612x612&w=0&k=20&c=6LqSjh4Qc_pmmUm1wa73AOPgDV5aBS9zbV90LisJ3M0=')",

        'recipehero': "url('https://media.istockphoto.com/id/1496340376/photo/spices-herbs-and-condiments-on-wooden-table.jpg?s=612x612&w=0&k=20&c=xAE3sLXUkgS6gE3C8WsoR8GLzecqfP62o2GrWwxGa48=')"
      },
      colors: {
        'first': '#210535',
        'second': '#440C4D',
        'third': '#7B337D',
        'fourth': '#C973B4',
        'fifth': '#F5D5E0',
        'bg-black-opacity': 'rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}