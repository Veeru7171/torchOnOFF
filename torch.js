function toggleTorch() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(function(stream) {
          const track = stream.getVideoTracks()[0];
          track.applyConstraints({
            advanced: [{ torch: !track.getSettings().torch }]
          });
        })
        .catch(function(error) {
          console.error('Error accessing camera:', error);
        });
    } else {
      console.error('getUserMedia is not supported on your browser');
    }
  }
  