import Image from "next/image";
import styles from "./page.module.css";
import CreateFolder from "./AutoCreateFolder/autoCreatefolder";
import MyTab from "./myTab/mytab";

export default function Home() {
  return (
    <div id="file-settings-container">
      <MyTab></MyTab>
    </div>
  );
}
