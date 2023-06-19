import React from "react";
import styles from "./readingPage.module.css";

const ReadingPage: React.FC = () => {
  return (
    <div className={styles["reading-page"]}>
      <h1 className={styles.title}>地盤整理</h1>
      <ul>
        <li>應時常保持通道暢通。</li>
        <li>物料應分類及安全置，不可置太高。</li>
        <li>小心樓洞及確保樓洞已被圍封或蓋好。</li>
        <li>將垃圾盡快清理。</li>
        <li>設置充足的照明。</li>
        <li>熟悉滅火設備的位置和使用方法。</li>
      </ul>
      <h2 className={styles.subtitle}>安全措施</h2>
      <ul>
        <li>確保機器的危險部分已裝上護罩，才可操作機器。</li>
        <li>避免在照明不足的地方走動，因有些危險地方可能未裝上護欄。</li>
        <li>時常保持警覺，留意移動中的起重機、吊或其他吊重裝置。</li>
        <li>使用任何電力裝置或工具前，先檢查電線有否損壞。</li>
        <li>避免把電線在地面上拖曳或讓電線與水接觸。</li>
        <li>使用裝有漏電斷路裝置的電力工具。</li>
        <li>小心使用和處理化學物品。</li>
      </ul>
      <h2 className={styles.subtitle}>個人安全</h2>
      <ul>
        <li>佩戴保護器具。</li>
        <li>工作時不要飲酒和服用藥物。</li>
        <li>注意個人衛生。</li>
        <li>工地內切勿嬉戲。</li>
        <li>如發現任何不安全的情況，應立即向上級報告。</li>
      </ul>
    </div>
  );
};

export default ReadingPage;
