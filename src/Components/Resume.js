import { Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import NavBar from './navbar/NavBar';
import { Left } from './layout/Left';
import { Right } from './layout/Right';

const Resume = ({
  name,
  stack,
  address,
  phone,
  email,
  educations,
  languages,
  showLink,
  experience,
  skills,
}) => {
  return (
    <Document>
      <Page orientation='portrait'>
        <View>
          <NavBar
            name={name}
            stack={stack}
            address={address}
            phone={phone}
            email={email}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.left}>
            <Left
              education={educations}
              languages={languages}
              links={showLink}
            />
          </View>
          <View style={styles.right}>
            <Right experience={experience} skills={skills} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100%',
  },
  left: {
    backgroundColor: '#f8f9fa',
    width: '40%',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  right: {
    width: '60%',
  },
});

export default Resume;
