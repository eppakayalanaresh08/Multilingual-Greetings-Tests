import {Component} from 'react'

import EachGreeting from '../EachGreeting'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class LanguageList extends Component {
  state = {statusLanguage: languageGreetingsList[0]}

  onClickEachButton = id => {
    const listFilter = languageGreetingsList.filter(
      eachObject => eachObject.id === id,
    )
    this.setState({statusLanguage: listFilter[0]})
  }

  render() {
    const {statusLanguage} = this.state
    const {imageUrl, imageAltText, id} = statusLanguage
    return (
      <div className="container-bg">
        <h1 className="heading-greeting">Multilingual Greetings</h1>
        <ul className="lists-Objects">
          {languageGreetingsList.map(eachObject => (
            <EachGreeting
              eachObjectList={eachObject}
              key={eachObject.id}
              onClickEachButton={this.onClickEachButton}
              isActive={eachObject.id === id}
            />
          ))}
        </ul>
        <img src={imageUrl} alt={imageAltText} className="image-url" />
      </div>
    )
  }
}

export default LanguageList
