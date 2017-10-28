const authorsStyle = <style jsx>{`
.authors {
  position: absolute;
  bottom: 50px;
  left: 50px;
  width: 290px;
}

.author {
  display: flex;
  justify-content: space-between;
}

.author li {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
}

img {
  width: 56px;
  height: auto;
  margin-right: 10px;
}

h2 {
  line-height: 1;
  padding-bottom: 16px;
  border-bottom: 6px solid;
  margin-bottom: 20px;
}

.name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
}

.github-link {
  margin-top: 4px;
  font-size: 12px;
  line-height: 1;
  color: #868e96;
}
`}</style>

export default authorsStyle