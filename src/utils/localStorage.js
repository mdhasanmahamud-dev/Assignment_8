export const addAppToLocalStorage = (app) => {
  const existingApps = JSON.parse(localStorage.getItem("installedApps")) || [];

  const isAlreadyInstalled = existingApps.some((a) => a.id === app.id);
  if (isAlreadyInstalled) {
    return "exists";
  }

  existingApps.push(app);
  localStorage.setItem("installedApps", JSON.stringify(existingApps));
  return "added";
};

export const getInstalledApps = () => {
  const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
  return apps;
};

export const removeAppFromLocalStorage = (id) => {
  const existingApps = JSON.parse(localStorage.getItem("installedApps")) || [];
  const updatedApps = existingApps.filter((app) => app.id !== id);
  localStorage.setItem("installedApps", JSON.stringify(updatedApps));
  return updatedApps;
};
