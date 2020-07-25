import React, {userState} from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios'
require('dotenv').config();
const API_KEY = process.env.API_KEY
const PROJECT_ID = process.env.PROJECT_ID
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
        "sourceLanguageCode": "en",
        "targetLanguageCode": "ru",
        "contents": ["Dr. Watson, come here!"],
        "mimeType": "text/plain"
      }
    const getData = () => {
        let url = `https://translation.googleapis.com/v3/projects/${PROJECT_ID}:translateText`
        axios
          .get(url,{params: params,
            headers: {
              Authorization: `Bearer ${API_KEY}`
            }
          })
          .then(results => {
            const data = results.data.translations;        
            this.setState({
              info: data,
              isLoading: false
            });
          })
          .catch((error) => {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          });
      }
    return (
        <div>
            <span>this is Page2</span>
            <Button variant="contained" color="primary">
                翻訳する
            </Button>
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