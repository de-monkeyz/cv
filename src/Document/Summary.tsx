import { StyleSheet, View, Text } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import Image from "./Image";
import { Heading, Paragraph } from "./Typography";

import skills from "../data/skills";

const styles = StyleSheet.create({
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.3cm",
    marginTop: "0.2cm",
    marginBottom: "0.5cm",
  },
  skill: {
    padding: "0.3cm",
    backgroundColor: "#F2F2F2",
    borderRadius: "3px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10pt",
    flexShrink: 1,
    flexGrow: 1,
  },
  skillLogo: {
    width: "0.5cm",
    height: "0.5cm",
    marginRight: "0.2cm",
    objectFit: "contain",
  },
});

const Summary: React.FC = () => {
  return (
    <>
      <Heading>A little about me</Heading>
      <Paragraph>
        I am a fullstack engineer with over a decade of experience in the
        industry. Primarily stationed in the fast moving world of start ups, I
        am a firm believer that engineers should be engaged with product process
        & discovery from day 1.
      </Paragraph>
      <Paragraph>
        With a background in frontend engineering, I am obsessive over the
        little details in UI/UX- pushing for that "something extra" when time
        allows to elevate a product to first class. Working in React codebases
        for over 7 years has given me a wealth of knowledge on how to optimize,
        build, and structure web applications regardless of the domain or end
        user.
      </Paragraph>
      <Paragraph>
        I am at my best when I'm making a significant impact- whether that's
        rapidly building prototypes, improving the developer experience, or
        adding to long term products. Being able to see the positive impact of
        my work is what motivates me the most.
      </Paragraph>
      <Heading>Proficiencies</Heading>
      <View style={styles.skills}>
        {skills.map(({ name, icon }, index) => (
          <View
            style={
              [
                styles.skill,
                index % 2 && { backgroundColor: "#E9E9E9" },
              ].filter(Boolean) as Style[]
            }
            key={name}
          >
            <Image style={styles.skillLogo} src={icon} />
            <Text>{name}</Text>
          </View>
        ))}
      </View>
      <Heading>My Role</Heading>
      <Paragraph>a</Paragraph>
    </>
  );
};

export default Summary;
