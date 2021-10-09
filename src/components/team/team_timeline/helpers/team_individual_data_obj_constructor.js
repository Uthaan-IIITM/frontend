function TeamIndividualDataObj(
  name,
  { facebookLink, linkedinLink, mailID, githubLink, instagramLink },
  profilePicURL,
  uthaanStatement
) {
  this.name = name;
  this.links = {
    facebookLink: facebookLink,
    linkedinLink: linkedinLink,
    mailID: mailID,
    githubLink: githubLink,
    instagramLink: instagramLink,
  };
  this.profilePicURL = profilePicURL;
  this.uthaanStatement = uthaanStatement;
}

export default TeamIndividualDataObj;
