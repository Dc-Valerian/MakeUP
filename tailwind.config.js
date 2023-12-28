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
        'hero': "url('https://media.istockphoto.com/id/1180493213/photo/professional-eyebrow-care.jpg?s=612x612&w=0&k=20&c=Ulcv0oqs35iwv1LUukNJPq3TbFfTUl-imJSnOSEiXCU=')",

        'hero2': "url('https://media.istockphoto.com/id/1201490222/video/golden-makeup-for-a-golden-beauty.jpg?s=640x640&k=20&c=xtsG8Okw7HDVdRd6WWNRS8t4_Pja8vFY1mAqX7jluDk=')",

        'hero3': "url('https://media.istockphoto.com/id/171582019/photo/applying-professional-make-up.jpg?s=612x612&w=0&k=20&c=BLxT1Chqzhb875Gfj3BjsxkZJE4OlaIi0P4Zfy5Se0I=')",

        'signinbg': "url('https://media.istockphoto.com/id/1128915783/photo/delicious-appetizing-classic-spaghetti-pasta-with-tomato-sauce-parmesan-cheese-and-fresh.jpg?s=612x612&w=0&k=20&c=UqLauvhesSHXpjA4FgOsPbjmuAytffqnhwEl0Mt5eHU=')",

        'venture': "url('https://media.istockphoto.com/id/1484788081/photo/woman-face-and-makeup-brush-for-skincare-cosmetics-and-dermatology-in-studio-application.jpg?s=612x612&w=0&k=20&c=_WIyfs39BE0D9GQlIs67uQsjbdlT5rsW3RFwRC_L3Xk=')",

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