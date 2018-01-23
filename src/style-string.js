export default `.dubterm-container {
  position: fixed;
  left: 0;
  bottom: 56px;
  bottom: 3.5rem;
  z-index: 18;
  width: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  color: #839496;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  -webkit-transform: translate(-460px, 0);
          transform: translate(-460px, 0);
  height: 80px; }

.dubterm-open {
  -webkit-transform: translate(0, 0);
          transform: translate(0, 0); }

.dubterm-toggle {
  width: 50px;
  height: 40px;
  border: none;
  background-color: #000;
  cursor: pointer;
  -ms-flex-item-align: end;
      align-self: flex-end; }

.dubterm-main {
  -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
          flex: 1 0 auto;
  background-color: #002b36;
  font-family: Consolas, monaco, monospace, "Courier New";
  font-size: 13px; }

.dubterm-results {
  min-height: 12px;
  padding: 5px;
  background-color: #073642;
  height: 40px; }

/* The input container */
.dubterm-input-c {
  position: relative;
  width: 100%;
  height: 40px; }

.dubterm-input-c span {
  position: absolute;
  width: 10px;
  left: 11px;
  top: 10px;
  display: block;
  height: 100%; }

.dubterm-input-c input {
  border: none;
  width: 100%;
  height: 100%;
  background-color: black;
  color: #ccc;
  font-family: Consolas, monaco, monospace, "Courier New";
  font-size: 13px;
  padding: 0 0 0 20px; }
`;