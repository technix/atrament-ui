import { h, Component } from 'preact';
import style from './style';

// paragraph component
const Paragraph = ({ text }) => (
  <div class={style.paragraph}>
    { text.map((line) => <p>{line}</p>) }
  </div>
);

// choice component
class Choice extends Component {
  makeChoice = (e) => {
    e.preventDefault();
    this.props.makeChoice(this.props.option.id);
  };

  render({ option, cssClass }) {
    return (
      <a href="#" onClick={this.makeChoice} class={style.choice}>{option.choice}</a>
    );
  }
}

// episode component
const Episode = ({ episode, scene, makeChoice }) => (
  <div class={style.episodeScroller}>
    <div class={style.episode}>
      <div class={style.paragraphWrapper}>
        {episode.map((s) => <Paragraph text={s.text} />)}
      </div>
      <div id="currentScene" class={style.currentScene}>
        <Paragraph text={scene.text} />
      </div>
      <div class={style.choiceWrapper}>
        {scene.choices.map((o) => <Choice option={o} makeChoice={makeChoice} />)}
      </div>
    </div>
  </div>
);

export default Episode;