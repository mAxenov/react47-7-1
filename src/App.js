import React, { useState } from 'react';
import moment from 'moment-with-locales-es6';
moment.locale('ru');


function DateTimePretty(Component) {

  return function (props) {
    let dateTime = new moment(new Date(props.date)).fromNow();
    return <Component {...props} date={dateTime} />
  }
}


function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}

function Video(props) {
  const Test = DateTimePretty(DateTime);
  return (
    <div className="video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <Test date={props.date} />
    </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-02-11 17:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-02-13 17:15:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-02-12 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-02-13 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-02-13 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-02-13 05:24:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}