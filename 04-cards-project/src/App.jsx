import React from 'react'
import Card from './components/Card'
import User from './components/User'
import amazonLogo from '../src/images/amazon.jpeg'
import appleLogo from '../src/images/apple.png'
import metaLogo from '../src/images/meta.svg'
import googleLogo from '../src/images/Google.svg'
import netflixLogo from '../src/images/Netflix.svg'

const App = () => {

  const jobOpenings = [
  {
    companyLogo: amazonLogo,
    companyName: "Google",
    datePosted: "2026-01-10",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    payInDollars: 95000,
    location: "Silicon Valley"
  },
  {
    companyLogo: amazonLogo,
    companyName: "Amazon",
    datePosted: "2026-01-08",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    payInDollars: 90000,
    location: "Pune"
  },
  {
    companyLogo: appleLogo,
    companyName: "Apple",
    datePosted: "2026-01-05",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payInDollars: 130000,
    location: "London"
  },
  {
    companyLogo: metaLogo,
    companyName: "Meta",
    datePosted: "2026-01-12",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    payInDollars: 115000,
    location: "Silicon Valley"
  },
  {
    companyLogo: netflixLogo,
    companyName: "Netflix",
    datePosted: "2026-01-07",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payInDollars: 145000,
    location: "London"
  },
  {
    companyLogo: googleLogo,
    companyName: "Google",
    datePosted: "2026-01-09",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
    payInDollars: 60000,
    location: "Pune"
  },
  {
    companyLogo: amazonLogo,
    companyName: "Amazon",
    datePosted: "2026-01-11",
    post: "Cloud Support Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    payInDollars: 85000,
    location: "London"
  },
  {
    companyLogo: appleLogo,
    companyName: "Apple",
    datePosted: "2026-01-06",
    post: "Hardware Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payInDollars: 140000,
    location: "Silicon Valley"
  },
  {
    companyLogo: metaLogo,
    companyName: "Meta",
    datePosted: "2026-01-04",
    post: "AR/VR Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    payInDollars: 120000,
    location: "London"
  },
  {
    companyLogo: netflixLogo,
    companyName: "Netflix",
    datePosted: "2026-01-03",
    post: "QA Automation Engineer",
    tag1: "Part-time",
    tag2: "Mid Level",
    payInDollars: 70000,
    location: "Pune"
  }
];


console.log(jobOpenings);


  

  return (
    <div>
      <div className="parent">
        {
          jobOpenings.map(
            function(elem, idx) {
              return <div key={idx}>
                <Card
                      companyName={elem.companyName} 
                      companyLogo={elem.companyLogo}
                      datePosted={elem.datePosted}
                      post={elem.post}
                      tag1={elem.tag1}
                      tag2={elem.tag2}
                      pay={elem.payInDollars}
                      location={elem.location}
                      />
              </div>
            }
          )
        }
      </div>
    </div>
  )
}

export default App
