import './Body.css';

export default function Body() {
  const item = (
    <div class="item">
      <img src={"./images/card-image.png"} class="box-image" />
      <h3 className="title">Card Title</h3>
      <p className="context">
        This is a longer card with supporting text below as a natural lead-in to
        additional content.
      </p>
    </div>
  );

  let items = [];
  const t = 12;
  for (let i = 0; i < t; i++) {
    items.push(item);
  }

  return <div class="items">{items}</div>;
}

