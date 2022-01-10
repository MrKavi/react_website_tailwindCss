import Image1 from '../../Images/svgOne.svg';
import Image2 from '../../Images/svgtwo.svg';
import Image3 from '../../Images/svgthree.svg';

export const homeObjOne={
    id: 'courses',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    topLine:'Top courses',
    heading:'Java Programming',
    description:'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. ... Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture.',
    buttonLabel:'Get Started',
    imgStart:false,
    img: Image1,
    alt:'abc',
    dark: 'false',
    primary: 'false',
    darkText:'true'
};

export const homeObj2={
    id: 'about',
    lightBg: false,
    lightText: false,
    // darkText: true,
    lightTextDesc: true,
    topLine:'Top courses',
    heading:'HTML CSS',
    description:'HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.',
    buttonLabel:'View Course',
    imgStart:'true',
    img: Image2,
    alt:'abc',
    dark: true,
    primary: true,
    darkText:true
}; 
export const homeObj3={
    id: 'contact',
    lightBg: true,
    lightText:'true',
    lightTextDesc: true,
    topLine:'Top courses',
    heading:'Hacking',
    description:'Hacking is identifying and exploiting weaknesses in computer systems and/or computer networks. Cybercrime is committing a crime with the aid of computers and information technology infrastructure. Ethical Hacking is about improving the security of computer systems and/or computer networks. Ethical Hacking is legal.',
    buttonLabel:'Learn More..',
    imgStart: false,
    img: Image3,
    alt:'abc',
    dark: 'true',
    primary: 'true',
    darkText:'false'
};