export default function Filter({ filter }) {
  return (
    <>
      <p>Find contact by name</p>
      <input onChange={filter} type="text" name="filter" />
    </>
  );
}
