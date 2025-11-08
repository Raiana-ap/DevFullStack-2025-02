package exemplo.autentificacao.enrollement.dto;

import jakarta.validation.constraints.NotNull;

public class EnrollmentRequest {
    @NotNull
    private Long courseId;
    @NotNull
    private Long userId;

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
