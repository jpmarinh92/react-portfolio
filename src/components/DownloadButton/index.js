const DownloadButton = props => {
  const downloadFile = () => {
    window.location.href = "../../assets/images/Juan_Pablo_Marin_CV.pdf"
  }
  return (
            <button onClick={downloadFile} />
  )
}
export default DownloadButton;