## 65. Updating State Based on Current State

#### some issues

```javascript
function handleNext() {
  if (step < 3) {
    setStep(step + 1);
    setStep(step + 1);
  } // it just increase by one
}

// instead of using a value, use a callback function :
function handleNext() {
  if (step < 3) {
    setStep((step) => step + 1);
    setStep((step) => step + 1);
  }
}
```
