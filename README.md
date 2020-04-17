# What is this
Googleドライブの特定の名称のフォルダ内に格納したcsvファイルを全て読み取り、
シートに出力するGoogle App Scriptです。

# how to use
## csvファイルの読み込み
- 本コードをGoogle App Scriptにコピーし、CSVを格納するフォルダ名を任意の名称に変更してください。
  ※直下のフォルダでなくとも使用できますが、固有名詞としてください
- csvを格納し、本スクリプトを実行するとcsvを読み取り、スプレッドシートにファイル名のシートを作成します。
  (すでにシートが作成されている場合はclearします)

## (備考)APIとしてスプレッドシートを出力する方法
- Googleスプレッドシートのメニューで「ファイル->ウェブに公開」で「公開」を選択する
- https://docs.google.com/spreadsheets/d/xxxxx/edit#gid=0
  - スプレッドシートの「xxxx」部分をコピー
- https://spreadsheets.google.com/feeds/list/YYYY/ZZ/public/values?alt=json
  - YYYY:先程コピーした「xxxx」の部分をペースト
  - ZZ: シートを左から数えた順番。左から2番目なら「2」
  - 置き換えた値で実行するとjsonファイルを出力できる。
  
# ref
https://qiita.com/iori_ama/items/b6cf9c8ee901884d0305
(写真等を含む説明はこちらを参考にしてください)
