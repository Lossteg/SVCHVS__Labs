const titleMap = {
    "/": "Posts Feed",
    "/home": "Posts Feed",
    "/signin": "Sign In",
    "/signup": "Sign Up",
    "/profile": "User Profile",
    "/edit-profile": "Edit Profile",
    "/saved": "Saved Posts",
    "/communities": "Communities",
    "/my-communities": "My Communities",
    "/verify-email": "Verify Email",
    "/email-verified": "Email Verified",
    "/login-verified": "Login Verified",
    "/following": "Following",
  };
  /**
   * Returns the title of a page based on its route path.
   * @param {string} path - The path of the page route.
   * @returns {string} The title of the page with the site name appended.
   */
  export const getTitleFromRoute = (path) => {
    if (titleMap[path]) {
      return `${titleMap[path]} | EdTern`;
    }
  
    const userProfileRegex = /^\/user\/(\w+)$/;
    const postRegex = /^\/(my\/)?post\/(\w+)$/;
    const communityRegex =
      /^\/community\/(\w+)(\/report|\/reported-post|\/moderator)?$/;
  
    if (userProfileRegex.test(path)) {
      return "User Profile | EdTern";
    } else if (postRegex.test(path)) {
      return "Post | EdTern";
    } else if (communityRegex.test(path)) {
      return "Community | EdTern";
    }
  
    return "EdTern";
  };