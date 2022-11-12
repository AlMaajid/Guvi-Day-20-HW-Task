import Project from "./components/Project";

export default function App() {
  let data = [
    {
      videoLink: 'https://youtu.be/56bRbgfLIHw',
      img: 'https://images.moneycontrol.com/static-mcnews/2022/08/Andrew-tate-770x435.jpg?impolicy=website&width=1600&height=900',
      projectTitle: 'Andrew Tate',
      projectText: "Andrew Tate Net Worth 2022: Andrew Tate was born on 1 December 1986 in Chicago, USA but after the divorce of the parents, he came to Luton with his mother. Growing up, Tate started kick boxing. He was the world champion four times and he was very poplar among youth who loved this sport. After leaving kick boxing, he appeared in the TV reality show Big Brother as he was a popular person. In the year 2017, he had to stay in jail for two days in a case and after that he shifted to Romania.Andrew Tate’s main business venture is Hustler University and with the help of this platform, people are getting knowledge about the ways to earn money online. Andrew Tate is an American kickboxer who has a net worth of $355 million as per the latest update. According to the report, about 1 lakh 36 thousand children study with him. A fee of Rs 3600 is charged from the candidate every month.",
      link: 'https://www.sssamiti.org/andrew-tate-net-worth/',
      buttonText: 'Check Here'
    },
    {
      videoLink: 'https://youtu.be/nOX8bMF5T6Q',
      img: 'https://nypost.com/wp-content/uploads/sites/2/2021/04/Jordan-Peterson-Dangerous-Mind.jpg?quality=75&strip=all',
      projectTitle: 'Jordan Peterson',
      projectText: 'Dr. Jordan B. Peterson is a clinical psychologist and professor emeritus at the University of Toronto. From 1993 to 1998 he served as assistant and then associate professor of psychology at Harvard. He spent fifteen years writing Maps of Meaning: The Architecture of Belief (1999; released in June 2018 as a now bestselling author-read audiobook). Maps of Meaning is a scholarly investigation into the nature of narrative and religious thought, the structure of perception, the regulation of emotion, and the motivation for atrocity in the service of ideology. Dr. Peterson also penned the popular global bestsellers Beyond Order: 12 More Rules for Life & 12 Rules for Life: An Antidote to Chaos, #1 for nonfiction in 2018 in the US, Canada, the UK, Australia, New Zealand, Sweden, the Netherlands, Brazil and Norway, both translated into some 50 languages. The latter book has sold more than five million copies; the former, released in mid 2021, 750,000.',
      link: 'https://www.jordanbpeterson.com/about/',
      buttonText: 'Check Here'
    },
    {
      videoLink: 'https://youtu.be/ZMgPRnzkVmc',
      img: 'https://static01.nyt.com/images/2020/02/02/sports/02kobe-essay-lede/merlin_93708212_ff16a83c-391b-4b25-a4d5-77eaf0cbbb20-superJumbo.jpg',
      projectTitle: 'Kobe Bryant',
      projectText: "The great Kobe Bryant was an athlete of the first degree. He was one of basketball’s most accomplished shooting guards and played 20 seasons with the Los Angeles Lakers, which comprised his entire athletic career right out of high school. He could arguably be considered the sport’s GOAT (greatest of all time).Of course, the debate over the professional basketball GOAT is decades-long, but whether you believe it’s Kobe Bryant, Michael Jordan, LeBron James, Larry Bird, Magic Johnson, Kareem Abdul-Jabbar or any of the other b-ball greats, they all got there because they put their entire heart into each game.Similarly, when you make the decision to do whatever you've chosen to do, whether in life or in business, it's important to devote ever-increasing amounts of energy to that single idea. Believe that failure is not an option. This can often be the difference between making a modest achievement of your idea and turning it into the GOAT in business.",
      link: 'https://www.forbes.com/sites/forbescoachescouncil/2020/03/10/mamba-mentality-the-mindset-it-takes-to-be-the-best/?sh=3f1b5dfa74eb',
      buttonText: 'Check Here'
    },
    {
      videoLink: 'https://youtu.be/9fh7Gt5Bo6s',
      img: 'https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg',
      projectTitle: 'Giga Chad',
      projectText: "Ernest Khalimov was born in Moscow, Russia on the 1st of March, 1969 and as of now, his age is around 52 years. He started his work as a fitness model and a bodybuilder in Russia. He is currently residing in Russia and continues his work in Russia as a very popular face who is popular for his good looks, excellent muscular body, and super sleek jawline.He has worked very hard to achieve what he has in life today. Though surrounded by many controversies on and off with his consistent hard work and dedication he has managed to rule social media with a colossal fan base who are drooling crazy on him. Ernest Khalimov who is also nicknamed Sophie GigaChad is a very famous Russian fitness model, bodybuilder, fitness trainer, Internet personality, and entrepreneur. He was born in Moscow, Russia, and rose to fame after appearing on the Sleek’N’Tears project as a model with a perfect jawline and a muscular body.",
      link: 'https://www.scoopearth.com/ernest-khalimov/',
      buttonText: 'Check Here'
    }

  ]
  return (
    <div className="container">

      {/* <!-- Page Heading --> */}
      <h1 className="my-4">Legendary
        <small> TOP G</small>
      </h1>
      <Project item={data[0]} />
      <Project item={data[1]} />
      <Project item={data[2]} />
      <Project item={data[3]} />

    </div>

  )
}


