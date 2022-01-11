import TeamIndividualColorThemeObj from "../components/team/team_timeline/helpers/team_individual_profile_color_theme_obj_constructor";
import TeamIndividualDataObj from "./../components/team/team_timeline/helpers/team_individual_data_obj_constructor";

export const allRoutes = [
  "",
  "events",
  "shows",
  "articles",
  "interviews",
  "team",
  "gallery",
  "contactus",
];

export const mediumPostImageURL = "https://miro.medium.com/max/500/";

export const teamPageColorThemes = [
  new TeamIndividualColorThemeObj("#44C4FF", "#F5FBFF", "#80D7EA"),
  new TeamIndividualColorThemeObj("#5044FF", "#F6F5FF", "#8081EA"),
  new TeamIndividualColorThemeObj("#504485", "#F5F0FA", "#9266D9"),
  new TeamIndividualColorThemeObj("#FF44A0", "#FFF5F9", "#EA80C1"),
  new TeamIndividualColorThemeObj("#FF445B", "#FFF5F5", "#EA809B"),
];

export const collegeNameAndAddress =
  "Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior, Morena Link Rd, IIITM Campus, Gwalior, Madhya Pradesh 474015";

export const contactLinks = {
  facebook: "https://www.facebook.com/uthaaniiitmg/",
  linkedin: "https://www.linkedin.com/company/uthaan-iiitm/",
  mail: "mailto:uthaan@iiitm.ac.in",
  github: "https://github.com/uthaan-IIITM/",
  instagram: "https://www.instagram.com/uthaaniiitm/",
  youtube: "https://www.youtube.com/c/UthaanIIITM/",
};

export const contactPhoneNumbers = ["8989738932", "8317057596"];

export const googleMapsEmbedURL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10569.301225709418!2d78.1728634891839!3d26.24920269941473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sIndian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1634102179694!5m2!1sen!2sin";

export const errorPageContent = {
  topLeft: " Awww...Don't be Sad It's just a",
  errorCode: "404 Error!",
  bottomContent:
    "What you're looking for may have been misplaced in Long Term Memory",
};

export const foundersData = [
  new TeamIndividualDataObj(
    "Amandeep Singh",
    {
      facebookLink: "https://www.facebook.com/asr.jackson.9",
      linkedinLink: "https://www.linkedin.com/in/amandeepsingh13/",
      instagramLink: "https://www.instagram.com/the.real.sardar/",
    },
    "https://res.cloudinary.com/uthaan/image/upload/v1635525774/teams/1622868914452_g9kofu.jpg",
    "The main aim of Uthaan is not just to conduct events but to eliminate the distance between junior & senior."
  ),
  new TeamIndividualDataObj(
    "Arpan Jain",
    {
      facebookLink: "https://www.facebook.com/arpan.jain.1405",
      linkedinLink: "https://www.linkedin.com/in/arpan-jain-947640126/",
    },
    "https://res.cloudinary.com/uthaan/image/upload/v1635525808/teams/1543377952110_q8gomg.jpg",
    "Uthaan is not just a club it's a platform wherein we help each other in extra-curricular activities, academics new project etc."
  ),
  new TeamIndividualDataObj(
    "Akshay Goel",
    {
      facebookLink: "https://www.facebook.com/akshaytheboss",
      linkedinLink: "https://www.linkedin.com/in/akshayiiitm/",
    },
    "https://res.cloudinary.com/uthaan/image/upload/v1635525836/teams/1517547988167_cqrw6n.jpg",
    "In Uthaan you learn skills that you can't learn through books like swimming."
  ),
];

export const pageDescriptions = {
  ARTICLE_PAGE:
    "Uthaan has a variety of articles written by various members of our institute since it's Inception. From articles on social issues to gripping fiction there's something for every student to relate to.",

  SHOWS_PAGE:
    " Whether it's the insights and tips for placements, amusing and pleasant experiences of freshers or an exhibition of poetry and speech craft, Uthaan offers it all through it's various shows. ",

  INTERVIEWS_PAGE:
    " Uthaan's interviews are very insightful. The firsthand experience of knowledgeable and eminent individuals contributes to everyone's knowledge of the industry.",

  EVENTS_PAGE:
    "Uthaan has it all, from entertaining and intriguing events liked by all to interactive and competing ones for those who love a challenge.",
};
