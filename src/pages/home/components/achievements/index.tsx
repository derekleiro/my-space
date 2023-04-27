import AchievementItem from "../achievement-item";

type T = {
  title: string;
  bodyText: string;
};
const Achievements = () => {
  const data: Array<T> = [
    {
      title: "Beginnings at Powem",
      bodyText: `Journey begins at Powem. 
      In my two years working at Powem, I was able to meet and often
      exceed stakeholder expectations. As part of the frontend team, 
      I often influenced what software, or framework the team worked
      with. One of my greatest achievements at Powem was the design 
      and optimisations of the company website, which led to an increase
      in sales!`,
    },
    {
      title: "Move into QA",
      bodyText: `
      At Gezako, I worked with React extensively. One of the most
      influential projects I worked on, was an initiative 
      to widen access to educational material to university students 
      in Kenya and Uganda. I learned alot of industry best practices,
      with React during my tenure.
      `,
    },
    {
      title: "Venturing into social media",
      bodyText: `
      To fully put my react knowledge to use, I developed a social
      media app called Random-ly. It's premise, users can sign in 
      and drop a message to the world! Built using React, with
      Firebase on the backend (BaaS), I strengthed my experience
      with React and learned alot in the process`,
    },
    {
      title: "And now the Fintech industry",
      bodyText: `
      Last year I got an opportunity to work with a young and fun 
      startup called Fingo Africa. During my one year journey I was
      able to contribute solutions to fintech challenges, building
      a product targeting millions of unbanked African youth.`,
    },
  ];

  return (
    <>
      {data.length !== 0 &&
        data.map((item, index) => {
          return (
            <AchievementItem
              title={item.title}
              key={index}
              itemLength={data.length}
              index={index}
              bodyText={item.bodyText}
            />
          );
        })}
    </>
  );
};

export default Achievements;
