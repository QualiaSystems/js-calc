# CalcTrainings

このコードは、ウェブアプリケーションのシンプルな電卓を作成し、制御するためのJavaScriptスクリプトです。以下、ステップごとに解説します：

1. まず、`field`と`display`という変数が作成され、それぞれクラスが`middle-part`と`display`で指定されたDOM要素へのリファレンスを保持します。`middle-part`は電卓のボタンを含み、`display`は現在の入力と計算結果を表示します。

2. 次に、`arr`という配列と、`num1`、`num2`、`act`、`finalDisp`という変数が作成されます。`arr`は電卓のボタンへのリファレンスを保持し、`num1`、`num2`、`act`は計算を実行する際に数値と演算子を格納するために使用されます。`finalDisp`は計算結果を格納します。

3. `display`要素のテキストを初期値として"0"に設定します。

4. ループを使用して、17個の電卓ボタンが作成され、それらが`field`に追加されます。各ボタンにはテキストが割り当てられ、必要に応じて識別のためのクラスが追加されます。

5. 次に、各ボタンにイベントリスナーが割り当てられる2番目のループがあります。これらのリスナーはボタンをクリックした際に実行され、さまざまな入力シナリオに対応します。

6. イベントハンドラでは、ボタンのタイプと`act`（最後の操作）の現在の状態を確認します。

   - もし`act`が空で、ボタンが操作ボタン（`act`クラスを持つ）の場合、`display`のテキストは"0"にリセットされます。
   - もし`act`が空でなく、ボタンが数字である場合、その数字が`num2`に追加され、`display`に表示されます。
   - もし`act`が空でなく、ボタンが"."である場合、"."が`num2`に追加され、結果が`display`に表示されます。
   - もし`act`が空で、ボタンが数字である場合、その数字が`num1`に追加され、`display`に表示されます。
   - もし`act`が空で、ボタンが"."であり、かつ`num1`が空でない場合、"."が`num1`に追加され、結果が`display`に表示されます。
   - もし`act`が空で、ボタンが数字でない場合、その操作が`act`に追加され、`display`に表示されます。

7. そして、もし`act`が"="操作（つまり、ユーザーが"="ボタンを押した）を含んでいる場合、`eval`を使用して計算が行われ、結果が`finalDisp`に保存されます。結果が負の場合、マイナス記号が表示され、そうでなければ表示されません。`num1`、`num2`、`act`の変数はリセットされます。

8. ユーザーが"C"ボタンを押した場合、すべての変数がリセットされ、`display`は再び"0"に設定されます。
