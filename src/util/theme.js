export default {
    palette: {
      primary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#fff',
      },
      secondary: {
        light: '#757ce8',
        main: '#26a69a',
        dark: '#002884',
        contrastText: '#fff',
      },
    },
    typography:{
      useNextVariants: true, 
    },
  
    // Objects to be spread
  
    spreadThis: {
      form: {
            textAlign: 'center'
      },
      image: {
          margin: '20px auto 20px auto'
      },
      pageTitle: {
          margin: '20px auto 20px auto'
      },
      textField: {
          margin: '20px auto 20px auto'
      },
       button: {
          marginTop: 20,
          marginBottom: 10,
          position: 'relative'
      },
      customError: {
          color: 'red',
          fontSize: '0.8 rem',
          marginTop: 10
      },
      progress: {
          position: 'absolute',
          color: 'black'
      }
    }
}