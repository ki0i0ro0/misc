import CustomButton from "./CustomButton";
import styles from "./page.module.css";

export default function Home() {
  const testAction = async () => {
    "use server";

    console.log("FormAction開始");

    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("FormAction完了");
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <form action={testAction}>
            <button type="submit">form</button>
          </form>
          <CustomButton />
        </div>
      </main>
    </div>
  );
}
