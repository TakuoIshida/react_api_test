import React, {userState} from 'react'
import axios from 'axios'

const Page2 = () => {
    // const [translate, setTranslate] = userState('');
    // url = '';
    // useEffect(() => {
    //     fetch(url)
    //     .then((response) => response.json())
    //     .then((json) => setTranslate(json.content));
    //     return () => {
    //     }
    // }, [input])
    const params = {
        "q": ["Hello world", "My name is Jeff"],
        "target": "de"
      }
    const getData = () => {
        let url = 'https://translation.googleapis.com/language/translate/v2'
        axios
          .get(url,{
            headers: {
              Authorization: "Bearer AIzaSyAVt_rg6Sxe_1q9Jb4LWfJ7YqjFiE27ffo"
            }
          })
          .then(results => {
            const data = results.data.translations;        
            this.setState({
              info: data,
              isLoading: false
            });
          });
      }
    return (
        <div>
            <span>this is Page2</span>

        </div>
    )
}

export default Page2
// return される値
// {
//     "data": {
//       "translations": [
//         {
//           "translatedText": "Hallo Welt",
//           "detectedSourceLanguage": "en"
//         },
//         {
//           "translatedText": "Mein Name ist Jeff",
//           "detectedSourceLanguage": "en"
//         }
//       ]
//     }
//   }