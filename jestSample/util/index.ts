const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

export class DatabaseMock {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public save(_: number[]): void {
    // memo: 課題のために、あえて時々saveが失敗するようにしている
    // このままこのクラスとメソッドを利用しようとすると、片方(例外ありorなし)しか
    // 走らないので毎回カバレッジを100%にすることができない。ランダムになる。
    // なので、依存性の注入を実施して、モックを作成しどちらも走るようにする。
    // その時に元の関数に新たに引数を追加してもよいの？

    // そもそも、asyncSumOfArraySometimesZeroのtry構文内に
    // DatabaseMockのインスタンスの宣言とメソッド実行があるので
    // テストするメソッドにインスタンスの引数を追加する依存性の注入を行わないとカバレッジ100%いかない？
    // なぜなら、asyncSumOfArraySometimesZeroをテストコードで宣言した段階で
    // try~catch構文が走り、例外ありorなしの1つしか走らないから。
    if (getRandomInt(10) < 2) {
      throw new Error("fail!");
    }
  }
}
