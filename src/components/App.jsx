import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setStats = stat => {
    this.setState(prevState => ({ [stat]: prevState[stat] + 1 }));
    return;
  };

  getTotal() {
    this.total = this.state.good + this.state.neutral + this.state.bad;
    return this.total;
  }
  getPositivekPercentage() {
    this.positiveFeedbackPercentage = Math.round(
      (this.state.good / this.getTotal()) * 100
    );
    return this.positiveFeedbackPercentage;
  }

  render() {
    const positive = this.getPositivekPercentage();
    const { good, neutral, bad } = this.state;
    const total = this.getTotal();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.setStats}
          />
        </Section>
        <Section title="Statisctic">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            ></Statistics>
          ) : (
            <Notification text="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
