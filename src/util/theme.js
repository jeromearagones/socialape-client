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
      },
      invisibleSeparator: {
        border: 'none',
        margin: 4
      },
      visibleSeparator: {
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        marginBottom: 20
      },
      paper: {
        padding: 20
      },
      profile: {
        '& .image-wrapper': {
          textAlign: 'center', 
          position: 'relative',
          '& button': {
            position: 'absolute',
            top: '80%',
            left: '70%'
          }
        },
        '& .profile-image': {
          width: 200,
          height: 200,
          objectFit: 'cover',
          maxWidth: '100%',
          borderRadius: '50%'
        },
        '& .profile-details': {
          textAlign: 'center',
          '& span, svg': {
            verticalAlign: 'middle'
          },
          '& a': {
            color: '#f44336',
          }
        },
        '& hr': {
          border: 'none',
          margin: '0 0 10px 0'
        },
        '& svg.button': {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      },
      buttons: {
        textAlign: 'center',
        '& a': {
          margin: '20px 10px'
        }
      }
    }
}