import { h, app } from 'hyperapp'

const books = [{
  year: 2019,
  five: [
    { title: 'Fooled By Randomness', author: 'Nassin Taleb', link: '' },
    { title: 'Brave New World', author: 'Aldous Huxley', link: '' },
    { title: 'Voices', author: 'Antonio Porchia', link: '' },
    { title: 'In Praise of Shadows', author: 'Jun\'ichirō Tanizaki', link: '' },
    { title: 'Nonviolent Communication: A Language of Life', author: 'Marshall B. Rosenberg', link: '' },
    { title: 'The Myth of Sisyphus and Other Essays', author: 'Albert Camus', link: '' },
    { title: 'Awareness: The Perils and Opportunities of Reality', author: 'Anthony De Mello', link: '' },
    { title: 'Lao Tzu: Tao Te Ching', author: 'Ursula K. Le Guin', link: '' }
  ],
  four: [
    { title: 'How to be Free', author: 'Epictetus', link: '' },
    { title: 'This is It & Other Essays on Zen & Spiritual Experience', author: 'Alan Watts', link: '' },
    { title: 'A Monk\'s Guide to a Clean House and Mind', author: 'Shoukei Matsumoto', link: '' },
    { title: 'Monetizing Innovation: How Smart Companies Design the Product Around the Price', author: 'Madhavan Ramanujam', link: '' }, 
    { title: 'At the Existentialist Café: Freedom, Being, and Apricot Cocktails', author: 'Sarah Blakewell', link: '' },
    { title: 'The Metamorphosis', author: 'Franz Kafka', link: '' }
  ],
  three: [
    { title: 'A Book of Five Rings: The Classic Guide to Strategy', author: 'Musashi Miyamoto', link: '' },
    { title: 'The Numbers Game: Why Everything You Know About Soccer Is Wrong', author: 'Chris Anderson,  David Sally', link: '' }
  ]
}, {
  year: 2018,
  five: [
    { title: 'Fragments', author: 'Heraclitus', link: '' },
    { title: 'How to Live: A Life of Montaigne in One Question and Twenty Attempts at An Answer', author: 'Sarah Blakewell', link: '' },
    { title: 'A Invenção do Dia Claro', author: 'José de Almada Negreiros', link: '' },
    { title: 'Finite and Infinite Games: A Vision of Life as Play and Possibility', author: 'James P. Carse', link: '' },
    { title: 'Principles: Life and Work', author: 'Ray Dalio', link: '' },
    { title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', link: '' }
  ],
  four: [
    { title: 'The Things You Can See Only When You Slow Down: Guidance on the Path to Mindfulness from a Spiritual Leader', author: 'Haemin Sunim', link: '' },
    { title: 'The Obstacle Is the Way: The Timeless Art of Turning Trials into Triumph', author: 'Ryan Holiday', link: '' },
    { title: 'Leonardo da Vinci', author: 'Walter Isaacson', link: '' },
    { title: 'Sum: Forty Tales from the Afterlives', author: 'David Engleman', link: '' },
    { title: 'What We Talk About When We Talk About Love', author: 'Raymond Carver', link: '' }
  ],
  three: [
    { title: 'The Power of Habit: Why We Do What We Do in Life and Business', author: 'Charles Duhigg', link: '' },
    { title: 'Deep Work: Rules for Focused Success in a Distracted World', author: 'Cal Newport', link: '' },
    { title: 'The Prince', author: 'Niccolò Machiavelli', link: '' },
    { title: 'Small Data: The Tiny Clues that Uncover Huge Trends', author: 'Martin Lindstrom', link: '' }
  ]
}, {
  year: 2017,
  five: [
    { title: 'Man\'s Search for Meaning', author: 'Viktor E. Frankl', link: '' },
    { title: 'Siddhartha', author: 'Hermann Hesse', link: '' },
    { title: 'Antifragile: Things That Gain from Disorder', author: 'Nassim Nicholas Taleb', link: '' },
    { title: 'Essentialism: The Disciplined Pursuit of Less', author: 'Greg McKeown', link: '' },
    { title: 'Mastery', author: 'Robert Greene', link: '' },
    { title: 'Predictably Irrational: The Hidden Forces That Shape Our Decisions', author: 'Dan Ariely', link: '' },
  ],
  four: [
    { title: 'Presence: Bringing Your Boldest Self to Your Biggest Challenges', author: 'Amy Cuddy', link: '' },
    { title: 'Levels of the Game', author: 'John McPhee', link: '' },
    { title: 'Discipline Equals Freedom: Field Manual', author: 'Jocko Willink', link: '' },
    { title: 'Letters from a Self-Made Merchant to His Son', author: 'George Lorimer', link: '' },
    { title: 'Essentials Of Economics: A Brief Survey Of Principles And Policies', author: 'Faustino Ballve', link: '' },
    { title: 'Seven Brief Lessons on Physics', author: 'Carlo Rovelli', link: '' },
    { title: 'How to Win Friends and Influence People', author: 'Dale Canergie', link: '' }
  ],
  three: [
    { title: 'Calm Technology: Designing for Billions of Devices and the Internet of Things', author: 'Amber Case', link: '' },
    { title: 'The Inevitable: Understanding the 12 Technological Forces That Will Shape Our Future', author: 'Kevin Kelly', link: '' }
  ]
}, {
  year: 2016,
  five: [
    { title: 'Ego Is the Enemy', author: 'Ryan Holiday', link: '' },
    { title: 'As a Man Thinketh', author: 'James Allen', link: '' },
    { title: 'Extreme Ownership: How U.S. Navy SEALs Lead and Win', author: 'Jock Willink', link: '' },
    { title: 'How to Get Filthy Rich in Rising Asia', author: 'Mohsin Hamid', link: '' },
    { title: 'Inspired: How To Create Products Customers Love', author: 'Marty Cagan', link: '' }
  ],
  four: [
    { title: 'Meditations', author: 'Marcus Aurelius', link: '' },
    { title: 'Lee Kuan Yew: The Grand Master\'s Insights on China, the United States, and the World', author: 'Lee Kuan Yew', link: '' },
    { title: 'For the Time Being', author: 'Annie Dillard', link: '' },
    { title: 'Anything You Want', author: 'Derek Sivers', link: '' },
    { title: 'Where Good Ideas Come from: The Natural History of Innovation', author: 'Steve Johnson', link: '' },
    { title: 'Traction: A Startup Guide to Getting Customers', author: 'Gabriel Weinberg', link: '' },
    { title: 'Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days', author: 'Jake Knapp', link: '' },
    { title: 'The Tipping Point: How Little Things Can Make a Big Difference', author: 'Malcolm Gladwell', link: '' }
  ],
  three: [
    { title: 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life', author: 'Mark Manson', link: '' }
  ]
}, {
  year: 2015,
  five: [
    { title: 'The Richest Man in Babylon', author: 'George S. Clason', link: '' },
    { title: 'Zero to One: Notes on Startups, or How to Build the Future', author: 'Peter Thiel', link: '' },
    { title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future', author: 'Ashlee Vance', link: '' },
    { title: 'Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration', author: 'Ed Catmull  ', link: '' }
  ],
  four: [
    { title: 'Vagabonding: An Uncommon Guide to the Art of Long-Term World Travel', author: 'Rolf Potts', link: '' },
    { title: 'Outliers: The Story of Success', author: 'Malcolm Gladwell', link: '' },
    { title: 'Economics in One Lesson: The Shortest & Surest Way to Understand Basic Economics', author: 'Henry Hazlitt', link: '' },
    { title: 'Quiet: The Power of Introverts in a World That Can\'t Stop Talking', author: 'Susan Cain', link: '' },
    { title: 'The Elements of Investing', author: 'Burton G. Malkiel', link: '' }
  ],
  three: [
    { title: 'Creative Confidence: Unleashing the Creative Potential Within Us All', author: 'Tom Kelley', link: '' },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', link: '' }
  ]
}]

const getBookStyle = (stars) => {
  switch(stars) {
    case 5: return 'bold';
    case 3: return 'light';
    default: return '';
  }
}

const Book = ({book, stars}) => (<li class={getBookStyle(stars)}>{book.title} — {book.author}</li>)

const YearStars = ({stars, books}) => {
  if (!books) {
    return null
  }

  return books.map(book => <Book book={book} stars={stars} />)
}

const YearBooks = ({yearBooks}) => (
  <div>
    <span class='strong'>{yearBooks.year}</span>
    <ul>
      <YearStars stars={5} books={yearBooks.five} />
      <YearStars stars={4} books={yearBooks.four} />
      <YearStars stars={3} books={yearBooks.three} />
    </ul>
  </div>
)

export default (state, actions) => (
  <div class="left-align page">
    <h3>
      Bookshelf
    </h3>
    <p>
      Since 2015, I have been keeping track of books I read or listen to. Here's a small compilation of <br/> 
      the ones I find particularly good. The five-stars are so interesting or revealing that everyone should <br/>
      read them.
    </p>
    <p>
      Inspired by <a href="https://patrickcollison.com/bookshelf">patrickcollison.com/bookshelf</a>
    </p>
    <br/>
    {books.map(yearBooks => <YearBooks yearBooks={yearBooks} />)} 
  </div>
)
