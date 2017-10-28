const navigationStyle = <style jsx>{`
ul {
  width: 100%;
}
li {
  width: 100%;
  font-weight: 700;
}

li:first-of-type .title--big {
  text-transform: uppercase;
}

.title--big {
  font-size: 24px;
  line-height: 1;
}

.title--small {
  opacity: .5;
  line-height: 1;
}

a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}

a:hover .title--small,
a:focus .title--small {
  opacity: 1;
}
`}</style>

export default navigationStyle