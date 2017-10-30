# ManoCurry Blog

## 개발시

개발 서버를 열어서 작업을 한다.

```sh
# 패키지 설치
npm i
# 자동생성 코드 만들기
npm run devnotes
# 개발 서버 시작
npm run dev
```

> 새 포스트를 추가할 때마다 `npm run devnotes`를 실행해야한다. 귀찮으면 다음 코드를 쓰면 변경
> 사항이 있을때마다 계속 갱신해준다.
>
> ```sh
> npm run devnotes:watch
> ```

## 배포시

**개발 서버가 떠있는 상태**에서 실행한다!

```
npm run build
```

이제 `out` 파일에 모든게 생성되어있으므로, https://github.com/ManoCurry/manocurry.github.io
의 master 브랜치로 푸시해주면 된다.

처음 설정할 경우 다음과 같이 하면 된다.

```sh
cd out
# git을 초기화한다.
git init
# 커밋을 만든다
git add -A
git commit -a
# 리모트를 등록한다
git remote add origin git@github.com:ManoCurry/manocurry.github.io.git
# 푸시해준다
git push -u origin master
```

이후론 `out`에서 `git push`만으로 갱신이 가능하다.
