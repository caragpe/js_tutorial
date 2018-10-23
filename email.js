function emailParts(email) {
  let lowercaseEmail = email.toLowerCase();
  return {
    username: email.split("@")[0],
    domain: email.split("@")[1]
  }
}