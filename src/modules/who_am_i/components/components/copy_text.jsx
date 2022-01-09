function CopyText({ showCopy, copyMessage }) {
  return (
    <>
      {showCopy === true ? (
        <p className="text-accent text-xs underline underline-offset-4">
          {copyMessage}
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default CopyText;
