// import React from "react";
// // import { Timeline } from "flowbite-react";

// export default function ProfessionalAchievements() {
//   // Achievement data stored in a structured array
//   const achievements = [
//     {
//       company: "Salesforce Inc., Dallas, TX",
//       period: "Dec 2023 – Present",
//       details: [
//         "Enhanced Data Infrastructure: Replaced Jitterbit with MuleSoft, increasing data processing speed by 40%, reducing system downtime, and enabling seamless scaling to accommodate enterprise data loads.",
//         "Streamlined Corporate Development: Designed a custom Corp Dev application, reducing manual errors by 25% and accelerating deal closures by 30%, enabling faster decision-making and regulatory compliance in M&A processes.",
//         "Optimized Compliance and Efficiency: Automated NDA workflows, cutting processing times by 40%, and reducing legal overhead, significantly enhancing cross-functional collaboration.",
//         "Orchestrated the seamless integration of multiple acquired organizations into a unified Salesforce system post-acquisition, streamlining processes and significantly enhancing operational efficiency across the enterprise.",
//       ],
//     },
//     {
//       company: "Wipro Limited, Dallas, TX",
//       period: "Mar 2013 – Nov 2023",
//       subCompanies: [
//         {
//           name: "Ciena Corporation",
//           period: "May 2020 – Nov 2023",
//           details: [
//             "Led a Digital Transformation: Transitioned legacy systems to the cloud, improving scalability and operational efficiency while cutting infrastructure costs by 40%.",
//             "Accelerated Business Processes: Implemented RPA solutions using UiPath, automating critical workflows and saving over 15,000 work hours annually.",
//             "Future-Proofed IT Systems: Executed a seamless cloud migration, enhancing uptime by 20% and enabling the organization to pivot swiftly to new business demands.",
//           ],
//         },
//         {
//           name: "CVR Energy",
//           period: "Apr 2019 – May 2020",
//           details: [
//             "Optimized Enterprise Architecture: Consolidated disparate systems, achieving a 25% reduction in operational complexity and ensuring data consistency.",
//             "Enhanced Asset Management: Improved inventory transparency across facilities, reducing recovery time by 20% and minimizing financial losses during operational disruptions.",
//             "Streamlined Procurement Workflows: Automated and optimized procurement operations, increasing efficiency by 35% and reducing cycle times significantly.",
//           ],
//         },
//         {
//           name: "Williams Energy",
//           period: "Mar 2013 – Apr 2019",
//           details: [
//             "Enabled Strategic Integration: Seamlessly integrated acquisitions into Oracle ERP systems, reducing onboarding time by 40% and aligning operations across entities.",
//             "Modernized Financial Operations: Migrated Oracle 11i to R12, improving system reliability and delivering faster financial processing by 30%.",
//             "Achieved Operational Excellence: Consolidated integrations under a unified framework, enhancing system compatibility and reducing support overhead by 20%.",
//           ],
//         },
//       ],
//     },
//     {
//       company: "Stryker, San Jose, CA",
//       period: "Sep 2010 – Mar 2013",
//       details: [
//         "Redefined Integration Standards: Established a standardized architecture for all interfaces, reducing error rates by 50% and increasing scalability for future integrations.",
//         "Transformed Invoice Management: Automated AP invoice approval workflows, cutting processing time by 40% and enhancing compliance with internal controls.",
//         "Accelerated Global Expansion: Led the successful integration of acquired divisions into Oracle EBS R12, enabling rapid operational ramp-up and minimizing disruption.",
//       ],
//     },
//     {
//       company: "IBM India",
//       period: "Jun 2009 – Sep 2010",
//       details: [
//         "Delivered Enterprise-Class Solutions: Spearheaded the deployment of scalable Oracle EBS solutions, aligning IT strategy with evolving business needs.",
//         "Optimized Change Governance: Streamlined change management protocols, reducing project delays by 30% and improving stakeholder satisfaction.",
//         "Elevated Team Performance: Mentored teams to achieve peak efficiency, fostering a high-performing environment that delivered consistent results.",
//       ],
//     },
//     {
//       company: "NaviSite Inc., Gurgaon, India",
//       period: "Jul 2007 – Jun 2009",
//       details: [
//         "Transformed Transaction Ecosystems: Implemented EDI payment solutions, reducing transaction errors by 40% and accelerating payment cycles.",
//         "Empowered Decision-Making: Delivered real-time sales order and inventory interfaces, enhancing visibility and driving quicker business decisions.",
//         "Streamlined Payroll Operations: Integrated third-party payroll systems, reducing processing errors by 35% and enabling accurate reporting.",
//         "Enhanced Data Analytics: Built custom BI views, providing actionable insights that improved operational decision-making.",
//       ],
//     },

//     // Add more data here
//   ];

//   return (
//     <section id="achivement" className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32">
//       <div className="max-w-7xl mx-auto">

//         {/* Section Title */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-widest text-blue-400">
//           Professional Achievements
//         </h2>

//         {/* Timeline */}
//         <Timeline>
//           {achievements.map((achievement, index) => (
//             <Timeline.Item key={index}>
//               <Timeline.Point />
//               <Timeline.Content>
//                 <Timeline.Time>{achievement.period}</Timeline.Time>
//                 <Timeline.Title className="text-gray-300 ">{achievement.company}</Timeline.Title>

//                 {/* If the company has sub-companies, display them */}
//                 {achievement.subCompanies ? (
//                   achievement.subCompanies.map((subCompany, subIndex) => (
//                     <div key={subIndex} className="mt-4 pl-4 border-l-1 border-[#313c4d]">
//                       <Timeline.Time>{subCompany.period}</Timeline.Time>
//                       <Timeline.Title className="text-blue-300">{subCompany.name}</Timeline.Title>
//                       <ul className="list-disc pl-6 mt-2 ">
//                         {subCompany.details.map((detail, detailIndex) => (
//                           <li key={detailIndex} className="text-gray-300 ">{detail}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))
//                 ) : (
//                   <ul className="list-disc pl-6 mt-2">
//                     {achievement.details.map((detail, detailIndex) => (
//                       <li key={detailIndex} className="text-gray-300">{detail}</li>
//                     ))}
//                   </ul>
//                 )}
//               </Timeline.Content>
//             </Timeline.Item>
//           ))}
//         </Timeline>
//       </div>
//     </section>
//   );
// }

import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent'

export default function ProfessionalAchievements() {
  const achievements = [
    {
      company: 'Salesforce Inc., Dallas, TX',
      period: 'Dec 2023 – Present',
      details: [
        'Enhanced Data Infrastructure: Replaced Jitterbit with MuleSoft, increasing data processing speed by 40%, reducing system downtime, and enabling seamless scaling to accommodate enterprise data loads.',
        'Streamlined Corporate Development: Designed a custom Corp Dev application, reducing manual errors by 25% and accelerating deal closures by 30%, enabling faster decision-making and regulatory compliance in M&A processes.',
        'Optimized Compliance and Efficiency: Automated NDA workflows, cutting processing times by 40%, and reducing legal overhead, significantly enhancing cross-functional collaboration.',
        'Orchestrated the seamless integration of multiple acquired organizations into a unified Salesforce system post-acquisition, streamlining processes and significantly enhancing operational efficiency across the enterprise.',
      ],
    },
    {
      company: 'Wipro Limited, Dallas, TX',
      period: 'Mar 2013 – Nov 2023',
      subCompanies: [
        {
          name: 'Ciena Corporation',
          period: 'May 2020 – Nov 2023',
          details: [
            'Led a Digital Transformation: Transitioned legacy systems to the cloud, improving scalability and operational efficiency while cutting infrastructure costs by 40%.',
            'Accelerated Business Processes: Implemented RPA solutions using UiPath, automating critical workflows and saving over 15,000 work hours annually.',
            'Future-Proofed IT Systems: Executed a seamless cloud migration, enhancing uptime by 20% and enabling the organization to pivot swiftly to new business demands.',
          ],
        },
        {
          name: 'CVR Energy',
          period: 'Apr 2019 – May 2020',
          details: [
            'Optimized Enterprise Architecture: Consolidated disparate systems, achieving a 25% reduction in operational complexity and ensuring data consistency.',
            'Enhanced Asset Management: Improved inventory transparency across facilities, reducing recovery time by 20% and minimizing financial losses during operational disruptions.',
            'Streamlined Procurement Workflows: Automated and optimized procurement operations, increasing efficiency by 35% and reducing cycle times significantly.',
          ],
        },
        {
          name: 'Williams Energy',
          period: 'Mar 2013 – Apr 2019',
          details: [
            'Enabled Strategic Integration: Seamlessly integrated acquisitions into Oracle ERP systems, reducing onboarding time by 40% and aligning operations across entities.',
            'Modernized Financial Operations: Migrated Oracle 11i to R12, improving system reliability and delivering faster financial processing by 30%.',
            'Achieved Operational Excellence: Consolidated integrations under a unified framework, enhancing system compatibility and reducing support overhead by 20%.',
          ],
        },
      ],
    },
    {
      company: 'Stryker, San Jose, CA',
      period: 'Sep 2010 – Mar 2013',
      details: [
        'Redefined Integration Standards: Established a standardized architecture for all interfaces, reducing error rates by 50% and increasing scalability for future integrations.',
        'Transformed Invoice Management: Automated AP invoice approval workflows, cutting processing time by 40% and enhancing compliance with internal controls.',
        'Accelerated Global Expansion: Led the successful integration of acquired divisions into Oracle EBS R12, enabling rapid operational ramp-up and minimizing disruption.',
      ],
    },
    {
      company: 'IBM India',
      period: 'Jun 2009 – Sep 2010',
      details: [
        'Delivered Enterprise-Class Solutions: Spearheaded the deployment of scalable Oracle EBS solutions, aligning IT strategy with evolving business needs.',
        'Optimized Change Governance: Streamlined change management protocols, reducing project delays by 30% and improving stakeholder satisfaction.',
        'Elevated Team Performance: Mentored teams to achieve peak efficiency, fostering a high-performing environment that delivered consistent results.',
      ],
    },
    {
      company: 'NaviSite Inc., Gurgaon, India',
      period: 'Jul 2007 – Jun 2009',
      details: [
        'Transformed Transaction Ecosystems: Implemented EDI payment solutions, reducing transaction errors by 40% and accelerating payment cycles.',
        'Empowered Decision-Making: Delivered real-time sales order and inventory interfaces, enhancing visibility and driving quicker business decisions.',
        'Streamlined Payroll Operations: Integrated third-party payroll systems, reducing processing errors by 35% and enabling accurate reporting.',
        'Enhanced Data Analytics: Built custom BI views, providing actionable insights that improved operational decision-making.',
      ],
    },

    // Add more data here
  ]

  return (
    <section
      id="achivement"
      className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-widest text-blue-400">
          Professional Achievements
        </h2>

        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.25,
            },
          }}
        >
          {achievements.map((data, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent className="text-white">
                  {data.period}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h1>{data.company}</h1>
                  <>
                    {data.subCompanies ? (
                      data.subCompanies.map((sub, idx) => {
                        return (
                          <div
                            key={idx}
                            // className="mt-4 pl-4 border-l-1 border-[#313c4d]"
                          >
                            <Timeline
                              sx={{
                                [`& .${timelineOppositeContentClasses.root}`]: {
                                  flex: 0.25,
                                },
                              }}
                            >
                              {/* <TimelineOppositeContent className="text-white">
                                {sub.period}
                              </TimelineOppositeContent> */}
                              <TimelineSeparator>
                                {/* <TimelineDot /> */}
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent>
                                <h3 className='flex  items-center gap-4'> <TimelineDot /> {sub.period}</h3>
                                <h1>{sub.name}</h1>
                                {/* <Timeline.Title className="text-blue-300">{subCompany.name}</Timeline.Title> */}
                                <ul className="list-disc pl-6 mt-2 ">
                                  {sub.details.map((detail, detailIndex) => (
                                    <li
                                      key={detailIndex}
                                      className="text-gray-300 "
                                    >
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </TimelineContent>
                            </Timeline>
                          </div>
                          // <p>fke</p>
                        )
                      })
                    ) : (
                      <ul className="list-disc pl-6 mt-2">
                        {data.details.map((det, idx) => {
                          return (
                            <li key={idx} className="text-gray-300">
                              {det}
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </>
                </TimelineContent>
              </TimelineItem>
            )
          })}
        </Timeline>
      </div>
    </section>
  )
}
