function TeamIndividualDataObj(
  name,
  { facebookLink, linkedinLink, mailID, githubLink, instagramLink },
  profilePicURL,
  uthaanStatement
) {
  this.name = name;
  this.links = {};
  if (facebookLink) this.links.facebookLink = facebookLink;
  if (linkedinLink) this.links.linkedinLink = linkedinLink;
  if (mailID) this.links.mailID = mailID;
  if (githubLink) this.links.githubLink = githubLink;
  if (instagramLink) this.links.instagramLink = instagramLink;
  this.profilePicURL = profilePicURL;
  this.uthaanStatement = uthaanStatement;
}

export default TeamIndividualDataObj;
