import React from "react";
import { useTranslation } from "react-i18next";
import "@/components/seo/SocialSharing.scss";

export default function SocialSharing() {
  const { t } = useTranslation();

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(
      shareUrl,
      "_blank",
      "width=600,height=400,resizable=yes,scrollbars=yes,status=yes"
    );
  };

  const tweetOnExTwitter = () => {
    const text = "Check out this awesome page!😉👍";
    const encodedText = encodeURIComponent(text);

    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://x.com/intent/tweet?text=${encodedText}&url=${url}`;

    window.open(
      shareUrl,
      "_blank",
      "width=600,height=400,resizable=yes,scrollbars=yes,status=yes"
    );
  };


  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(
      shareUrl,
      "_blank",
      "width=600,height=400,resizable=yes,scrollbars=yes,status=yes"
    );
  };

  const shareLink = () => {
    const url = window.location.href;
    const decodedUrl = decodeURIComponent(url);

    navigator.clipboard
      .writeText(decodedUrl)
      .then(() => {
        console.log("Link copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying link to clipboard:", error);
      });
  };

  return (
    <div className="social-sharing">
      <i
        className="fab fa-facebook"
        onClick={shareOnFacebook}
        title={t("footer.socialSharing.shareOnFacebook")}
      ></i>
      <i
        className="fab fa-x-twitter"
        onClick={tweetOnExTwitter}
        title={t("footer.socialSharing.tweetOnExTwitter")}
      ></i>
      <i
        className="fab fa-linkedin"
        onClick={shareOnLinkedIn}
        title={t("footer.socialSharing.shareOnLinkedIn")}
      ></i>
      <i
        className="fas fa-link"
        onClick={shareLink}
        title={t("footer.socialSharing.shareLink")}
      ></i>
    </div>
  );
}
