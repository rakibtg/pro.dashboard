export const copyUrl = () => {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      console.log("URL copied to clipboard successfully!");
    })
    .catch((err) => {
      console.error("Failed to copy URL: ", err);
    });
};
